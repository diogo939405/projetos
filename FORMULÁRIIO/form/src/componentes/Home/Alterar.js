import React, { useState, useEffect } from 'react'
import '../Home/estilo/Alterar.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';




export default function Alterar() {
  const navegar = useNavigate();
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const { id } = useParams();
  const [user, setUser] = useState(data)

  const { nome, sobrenome, email, genero } = user;
  const onInputChange = e => {
    console.log('eeeeeeeeeeeeeeeeeee', e, user, 'TARGET ', e.target)
    setUser({ ...user, [e.target.id]: e.target.value })
  };

  // const loadUser = async () =>{
  //   const result = await axios.get(`http://localhost:4000/usuarios/${id},user`);
  //   setUser(result.data)
  // }

  const onSubmit = async e => {
    e.preventDefault();
    user.Nome = e.target[0].value;
    user.Sobrenome = e.target[1].value;
    user.email = e.target[2].value;
    user.Genero = e.target[3].value
    await axios.put("http://localhost:4000/usuarios/" + user.id, user);
    console.log('========================  teste')
    navegar(-2)

  }

  return (
    <div className='Form'>
      <form className='form-body' onSubmit={e => onSubmit(e)} >
        <span className="p-float-label">
          <InputText id="nome" value={nome} onChange={e => onInputChange(e)} />
          <label htmlFor="username" className='inside-text'>Nome</label>
        </span>
        <br />
        <span className="p-float-label">
          <InputText id="sobrenome" value={sobrenome}
            onChange={e => onInputChange(e)} />
          <label htmlFor="username">Sobrenome</label>

        </span>
        <br />
        <span className="p-float-label">
          <InputText id="email" value={email} onChange={e => onInputChange(e)} />
          <label htmlFor="username">Email</label>
        </span>
        <br />
        <span className="p-float-label">
          <InputText id="genero" value={genero} onChange={e => onInputChange(e)} />
          <label htmlFor="username">Genero</label>
        </span>
        <Button label="Submit" type="submit" className='button-form' icon="pi pi-check" onclick={onSubmit} />
      </form>
      <br />

    </div>
  )
}