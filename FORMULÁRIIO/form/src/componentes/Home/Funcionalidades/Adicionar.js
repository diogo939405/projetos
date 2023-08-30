import React, { useState, axios } from 'react'
import '../estilo/adicionar.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {
  Link,
  Routes,
  // Route,
  useNavigate,
} from 'react-router-dom';



export default function Adicionar() {
  // let history = useHistory();
  // const [valuenome, setValueNome] = useState(''); 
  // const [valuesobrenome, setValueSobrenome] = useState(''); 
  // const [valueemail, setValueEmail] = useState(''); 
  // const [valuegenero, setValueGenero] = useState(''); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const routerRef = React.useRef();
  // console.log(routerRef)
  // const history = routerRef.current.history;

  const [user, setUser] = useState({
    Nome: "",
    Sobrenome: "",
    Email: "",
    Genero: ""
  });

  const { nome, sobrenome, email, genero } = user;
  const onInputChange = e => {
    console.log(e, user, e.target)
    setUser({ ...user, [e.target.Nome]: e.target.value })
  };

  const onSubmit = async e => {
    console.log('VAI GRAVAR', e.target[0].value, e.target[1].value)
    e.preventDefault();
    user.Nome = e.target[0].value;
    user.Sobrenome = e.target[1].value;
    user.Email = e.target[2].value;
    user.Genero = e.target[3].value
    await axios.post("http://localhost:4000/usuarios", user);
    console.log('========================  teste')
    navigate(-2)
    // history.push("/")
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
          <InputText id="username" value={nome} onChange={e => onInputChange(e)} />
          <label htmlFor="username" className='inside-text'>Nome</label>
        </span>
        <br />
        <span className="p-float-label">
          <InputText id="username" value={sobrenome} onChange={e => onInputChange(e)} />
          <label htmlFor="username">Sobrenome</label>

        </span>
        <br />
        <span className="p-float-label">
          <InputText id="username" value={email} onChange={e => onInputChange(e)} />
          <label htmlFor="username">Email</label>
        </span>
        <br />
        <span className="p-float-label">
          <InputText id="username" value={genero} onChange={e => onInputChange(e)} />
          <label htmlFor="username">Genero</label>
        </span>
        <Button label="Submit" type="submit" className='button-form' icon="pi pi-check" loading={loading} onclick={onSubmit} />
      </form>
      <br />

    </div>
  )
}
