import React from 'react'
import './login.css'

export default function login() {
  return (
    <div className='corpo'>
         <form className='form'>
        <fieldset className='field'>
        <legend className='legend'>Login</legend>
       
        <p class="Nome" id="nome">Nome</p>
        <input className="caixa" type="text" placeholder="digite"/>
        <br/>
        <p class="senha" id="senha"> Senha</p>
        <input className="caixa" type="password" placeholder="digite"/><br/><br/>

        <button className="botao" onclick="clicar()">Entrar</button>
       
        </fieldset>
        </form>
        
    </div>
  )
}