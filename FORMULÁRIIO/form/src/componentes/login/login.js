import React from 'react'
import './login.css'
import {  Link } from 'react-router-dom'

export default function login() {
  return (
   
    <div className='corpo'>
         <form className='form'>
        <fieldset className='field'>
        <legend className='legend'>Login</legend>
       
        <p className="Nome" id="nome">Nome</p>
        <input className="caixa" type="text" placeholder="digite"/>
        <br/>
        <p className="senha" id="senha"> Senha</p>
        <input className="caixa" type="password" placeholder="digite"/><br/><br/>

         <Link to="/Home/Inicio"><button className="botao">Entrar</button></Link>
       
        </fieldset>
        </form>
        
    </div>
  )
}