import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './header.css'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Route, Link } from 'react-router-dom'
import Question from './questionario/question'


export default function Index(props) {
  const [questions, setQuestions] = useState([])
  const [nameUser, setNameUser] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3000/question")
      .then(res => {
        setQuestions(res.data)
        setDefault()
      }).catch(err => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    axios.get("http://localhost:3000/user")
      .then(res => {
        setNameUser(res.data)
      }).catch(err => {
        console.log(err);
      })
  }, [])


  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:3000/assessment", data)
    setDefault()
    Route.push('/dashboard/user')
  };




  function setDefault() {

    setValue("name", "")
    setValue("object", "")
    setValue("description", "")
    // questions.map((question, index) => {
    //   setValue(`answers.[${index}].question`, question.id)
    //   setValue(`answers.[${index}].answer`, "")
    //   setValue(`answers.[${index}].comment`, "")
    // })  
  }


  return (
    <div className='container'>
      <form>
        <div className='header'>
          <h1>Questionário</h1>
        </div>
        <div className='questions'>
          <div>
            <FormControl sx={{ width: "170px" }}>
              <InputLabel id="demo-simple-select-label">Usuário</InputLabel>
              <Select
                {...register("user")}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Selecione ..."
              >
                <MenuItem >{"Selecione ..."}</MenuItem>
                {nameUser.map((options) => (
                  <MenuItem value={options._id} >{options.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>


          <div>
            <div>
              <span>Nome da avaliação</span>
            </div>
            <div>
              <TextField {...register("name")} id="standard-basic" label="Standard" variant="standard" />
            </div>
          </div>

          <div>
            <div>
              <span>Observação</span>
            </div>
            <div>
              <TextField {...register("object")} id="standard-basic" label="Standard" variant="standard" />
            </div>
          </div>

          <div>
            <div>
              <span>Descrição</span>
            </div>
            <div>
              <TextField {...register("description")} id="standard-basic" label="Standard" variant="standard" />
            </div>
          </div>
        </div>

        {questions.map((question, index) => (

          <div className='question'>
            <Question
              key={question.id}
              question={question.enunciation}
              title={question.criterion.name}
              id={question._id}
              position={index}
              setValue={setValue}
              register={register}
            />
          </div>
        ))}

        <div>
          {/* <Link to="/dashboard/user">  */}
            <Button className='buttonSubmit' onClick={handleSubmit(onSubmit)} variant="contained">Salvar</Button>
          {/* </Link> */}
        </div>
      </form>
    </div >
  )
}
