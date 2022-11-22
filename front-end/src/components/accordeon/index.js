import React from 'react'
import './header.css'
import Question from './questionario/question'

export default function index() {
  return (
    <div className='container'>
      <div className='header'>
        <h1>Questionário</h1>
      </div>
    <div>
      <Question 
        title={"Pergunta 1"}
        question={"O site está responsivo?"}
        />
    </div>
    
    <div>
      <Question 
        title={"Pergunta 2"}
        question={"Os itens selecionados de uma lista  são realçados visualmente de imediato?"}
        />
    </div>

    <div>
      <Question 
        title={"Pergunta 3"}
        question={"Todos os campos e mostradores de dados possuem rótulos identificativos?"}
        />
    </div>

    <div>
      <Question 
        title={"Pergunta 4"}
        question={"Os campos de entrada de dados possuem validação de dados?"}
      />
    </div>
  
    <div>
      <Question 
        title={"Pergunta 5"}
        question={"A disposição dos objetos de interação de uma caixa de dialogo segue uma ordem lógica?"}
      />
    </div>


    </div>
  )
}
