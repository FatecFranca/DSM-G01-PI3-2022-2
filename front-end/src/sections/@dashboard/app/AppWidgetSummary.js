// @mui
import { margin } from '@mui/system';
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, Divider, LinearProgress, LinearProgressProps, CircularProgress, CardContent, Grid } from '@mui/material';
import Box from '@mui/material/Box';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function CircularProgressWithLabel(props) {
  return (
    <Grid container spacing={2}>

    <Grid item xs={6}>
    <Typography variant="caption" component="div" color="text.secondary">
          Hoje: {props.testD}<br />
          Esta semana: {props.testW}
      </Typography>
      </Grid>  
      
    <Grid item xs={6} sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Grid>
    </Grid>
  );
}

function CardContente(props) {
  console.log(props)
  function Contente(props) {
  switch (props.variant) {
    case 'linear':
      return (<LinearProgressWithLabel value={props.percent} variant='determinate' />)
    case 'round':
     return (<CircularProgressWithLabel testD={props.testD} testW={props.testW} value={100/(props.total/props.testW)} />)
    default:
      break;
  }}
  return (
<CardContent>
            <Divider sx={{
              marginBottom: 2,
            }} flexItem='trues' />
            
              <Contente variant={props.variant} percent={props.percent} testD={props.testD} testW={props.testW} total={props.total}/>

        </CardContent>
  )
}

const StyledIcon = styled('div')(({ theme }) => ({
  marginRight: theme.spacing(4),
  float: 'right',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, percent, variant = 'linear', testD, testW, ...other }) {
  return (
    <Card
      sx={{
        paddingTop: 4,
        paddingBottom: 2,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <StyledIcon
        sx={{
          color: (theme) => theme.palette[color].dark,
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
              theme.palette[color].dark,
              0.24
            )} 100%)`,
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </StyledIcon>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>


      <Typography variant="h3">{fShortenNumber(total)}</Typography>

        
      <CardContente percent={percent} variant={variant} testD={testD} testW={testW} total={total}/>
      
      
    </Card>
  );
}
