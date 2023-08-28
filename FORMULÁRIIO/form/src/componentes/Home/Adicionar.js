import React , { useState } from 'react'
import './estilo/adicionar.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

        

export default function Adicionar() {

  const [value, setValue] = useState(''); 

  const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

  return (
    <div className='Form'>
      <form className='form-body'>
        <span className="p-float-label">
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username" className='inside-text'>Nome</label>
            </span>
            <br/>
            <span className="p-float-label">
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username">Sobrenome</label>
            </span>
            <br/>
            <span className="p-float-label">
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username">Email</label>
            </span>
            <br/>
            <span className="p-float-label">
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username">Genero</label>
            </span>
            
            </form>
            <br/>
            <Button label="Submit" className='button-form' icon="pi pi-check" loading={loading} onClick={load} />
    </div>
  )
}
