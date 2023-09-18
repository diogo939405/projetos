import React, { useState, useEffect } from 'react'
import '../Home/estilo/Alterar.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {  useParams} from 'react-router-dom';
import axios from 'axios';




export default function Alterar() {
   
  const id = useParams();
  const [user, setUser] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    genero: ""
  });

  const { nome, sobrenome, email, genero } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.id]: e.target.value })
  };

  useEffect(() =>{
    axios.get('http://localhost:4000/usuarios' +id)
    .then(res => setUser(res.data))
    .catch(err => console.log(err))
  },[])

  return (
    <div className='Form'>
      <form className='form-body' >
        <span className="p-float-label">
          <InputText id="nome" value={user.nome} onChange={e => onInputChange(e)} />
          <label htmlFor="username" className='inside-text'>nome</label>
        </span>
        <br />
        <span className="p-float-label">
          <InputText id="sobrenome" value={user.sobrenome} onChange={e => onInputChange(e)} />
          <label htmlFor="username">sobrenome</label>

        </span>
        <br />
        <span className="p-float-label">
          <InputText id="email" value={user.email} onChange={e => onInputChange(e)} />
          <label htmlFor="username">email</label>
        </span>
        <br />
        <span className="p-float-label">
          <InputText id="genero" value={user.genero} onChange={e => onInputChange(e)} />
          <label htmlFor="username">genero</label>
        </span>
        <Button label="Submit" type="submit" className='button-form' icon="pi pi-check" />
      </form>
      <br />

    </div>
  )
}
