import React, { useState } from 'react'
import axios from 'axios'
import '../estilo/adicionar.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {useNavigate}
from 'react-router-dom';



export default function Adicionar() {
  // let history = useHistory();
  // const [valuenome, setValuenome] = useState(''); 
  // const [valuesobrenome, setValuesobrenome] = useState(''); 
  // const [valueemail, setValueemail] = useState(''); 
  // const [valuegenero, setValuegenero] = useState(''); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const routerRef = React.useRef();
  // console.log(routerRef)
  // const history = routerRef.current.history;

  const [user, setUser] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    genero: ""
  });

  const { nome, sobrenome, email, genero } = user;
  const onInputChange = e => {
    console.log(e, user, e.target)
    setUser({ ...user, [e.target.id]: e.target.value })
  };

  const onSubmit = async e => {
    // console.log('VAI GRAVAR', e.target[0].value, e.target[1].value)
    e.preventDefault();
    await axios.post("http://localhost:4000/usuarios", user);
    console.log('========================  teste')
    navigate(-2)
    // history.push("/  ")
  }

  const load = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className='Form'>
      <form className='form-body' onSubmit={e => onSubmit(e)}>
        <span className="p-float-label">
          <InputText id="nome" value={nome} onChange={e => onInputChange(e)} />
          <label htmlFor="username" className='inside-text'>nome</label>
        </span>
        <br />
        <span className="p-float-label">
          <InputText id="sobrenome" value={sobrenome} onChange={e => onInputChange(e)} />
          <label htmlFor="username">sobrenome</label>

        </span>
        <br />
        <span className="p-float-label">
          <InputText id="email" value={email} onChange={e => onInputChange(e)} />
          <label htmlFor="username">email</label>
        </span>
        <br />
        <span className="p-float-label">
          <InputText id="genero" value={genero} onChange={e => onInputChange(e)} />
          <label htmlFor="username">genero</label>
        </span>
        <Button label="Submit" type="submit" className='button-form' icon="pi pi-check" loading={loading} onclick={onSubmit} />
      </form>
      <br />

    </div>
  )
}
