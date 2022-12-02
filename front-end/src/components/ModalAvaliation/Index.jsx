import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    scroll: 'overflow',
};

const ParseAnswer = {
    Y: 'Sim',
    N: 'Não',
    X: 'Não se aplica',
    P: "Adiar Resposta"
}


export default function IndexModal({ id, onClose }) {
    const [assessments, setAssessments] = useState([])
    console.log(id)
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },

    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    async function getRegistration() {
        try {
            const response = await axios.get(`http://localhost:3000/assessment/${id}/answer`)
            setAssessments(response.data)
            console.log(response)

        } catch (err) {
            console.log(err)
        }


    }
    useEffect(() => {
        getRegistration()
    }, [])

    console.log(assessments)

    return (
        <div>
            <Box sx={style}>
                <Stack spacing={5}>
                    <Stack>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Resultado da Avaliação
                        </Typography>

                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">Questão</TableCell>
                                                <TableCell align="right">Resposta</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {assessments.map((row) => (
                                                <TableRow
                                                    key={row._id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.question.enunciation}
                                                    </TableCell>
                                                    <TableCell align="right">{ParseAnswer[row.answer]}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                    </Stack>
                </Stack>
                <div>
                    <Button variant="outlined" color='error' onClick={onClose}>Fechar</Button>
                </div>
            </Box>

        </div>
    )
}