import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';

const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function IndexModal({id}) {
    const [assessments, setAssessments] = useState([])

    console.log(id)
    useEffect(() => {
       axios.get(`http://localhost:3000/assessment/${id}`)
       .then((response) => {
              setAssessments(response.data)
         }).catch((error) => {
                console.log(error)
            })
      }, [])

    return (
        <div>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Resultado da Avaliação
                </Typography>
                <Stack spacing={2}>
                    {assessments.map((assessment) => (
                        <div key={assessment.id}>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {assessment.name}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {assessment.description}
                            </Typography>

                        </div>
                    ))}

                </Stack>
            </Box>

        </div>
    )
}