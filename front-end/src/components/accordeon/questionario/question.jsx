import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ApartmentIcon from '@mui/icons-material/Apartment';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import Box from '@mui/material/Box';
import './header.css';
import { Typography } from '@mui/material';
// import Rad from "../RadioButton";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';



export default function InputAdm({ title, register, question, id, position, setValue }) {

  const [buttonVisible, setButtonVisible] = useState(false);

  function handleButton() {
    if (buttonVisible === false) {
      setButtonVisible(true);
    } else {
      setButtonVisible(false);
    }
  }

  setValue(`answers.[${position}].question`, id)


  const handleButtonVisible = () => {
    return (
      <div className="box">
        <Box
          size="large"
          startIcon={<ApartmentIcon />}
          sx={{
            width: '100%',
            height: '120px',
            bgcolor: '#afc8f3',
            color: '#333',
            borderRadius: '5px',
            border: '1px solid #aaa9a9',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '-16px',
          }}
        >
          <div className='boxQuestion'>
            <div>
              <Typography variant="h5" component="div" >
                {question}
              </Typography>
            </div>

            <div>
              <FormControl sx={{ width: "170px", margin: "10px", bgcolor: "#fff", border: "1px solid #3ea5e5", 
              borderRadius : "5px" }}>
                <InputLabel id="demo-simple-select-label">Resposta</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Selecione ..."
                  {...register(`answers.[${position}].answer`)}

                >
                  <MenuItem value={"S"}>Selecione</MenuItem>
                  <MenuItem value={"Y"}>Sim</MenuItem>
                  <MenuItem value={"N"}>Não</MenuItem>
                  <MenuItem value={"P"}>Resposta adiada</MenuItem>
                  <MenuItem value={"X"}>Não aplicável</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className='boxObserver'>
            
            <TextField
               id="filled-basic" 
               label="Observação" 
               variant="filled"
               type="text"
              {...register(`answers.[${position}].comment`)}
              sx={{ width: "500px",marginLeft: "5px",marginTop: "-25px" , bgcolor: "#fff",borderRadius: "5px" , border: "1px solid #3ea5e5",}}
               />
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
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '5px',
            border: '1px solid #305de3',
            textTransform: 'none',
            textAlign: 'left',
            mb: '1rem',
          }}
        >
          {title}
        </Button>
      </div>
      {buttonVisible && handleButtonVisible()}

    </div>
  );
}
