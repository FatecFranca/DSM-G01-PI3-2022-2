import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ApartmentIcon from '@mui/icons-material/Apartment';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import Box from '@mui/material/Box';
import './header.css';
import { Typography } from '@mui/material';
import Rad from "../RadioButton";



export default function InputAdm({ title, body, question }) {
  const [buttonVisible, setButtonVisible] = useState(false);

  function handleButton() {
    if (buttonVisible === false) {
      setButtonVisible(true);
    } else {
      setButtonVisible(false);
    }
  }

  const handleButtonVisible = () => {
    return (
      <div className="box">
        <Box
          size="large"
          startIcon={<ApartmentIcon />}
          sx={{
            width: '100%',
            height: '100px',
            bgcolor: '#ddf4ff',
            color: '#333',
            borderRadius: '5px',
            border: '1px solid #aaa9a9',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '-16px',
          }}
        >
          <div>
            <Typography variant="h5" component="div" >
              {question}
            </Typography>
          </div>
          <div>
            <Rad />
          </div>

        </Box>
      </div>
    );
  };

  return (
    <div>
      <div>
        <Button
          size="large"
          startIcon={<LockOpenIcon />}
          onClick={() => handleButton()}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            width: '100%',
            height: '100%',
            bgcolor: '#F5F5F5',
            color: '#333',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            borderRadius: '5px',
            border: '1px solid #8f8e8e',
            textTransform: 'none',
            textAlign: 'left',
            mb: '1rem',
            marginTop: '2rem',
          }}
        >
          {title}
        </Button>
      </div>
      {buttonVisible && handleButtonVisible()}
    </div>
  );
}
