import { useLoaderData, useNavigate } from "react-router-dom"
import './estilo/Inicio.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import React, {  useState } from 'react';
import axios from "axios"
import 'primeicons/primeicons.css';

export default function Inicio() {
  const [displayButton, setDisplayButton] = useState('none')
  const nav = useNavigate();
  const [selectedUsuarios, setSelectedUsuarios] = useState([]);
  const dadosProntos = useLoaderData();
  const [rowClick, setRowClick] = useState(true);


  const botoes = (rowdata) => {
    return <><Button onClick={() => nav("/Home/Alterar/", { state: rowdata })} icon="pi pi-user" rounded severity="danger" aria-label="Cancel" /><Button onClick={() => deleteUser(rowdata)} icon="pi pi-times" rounded severity="danger" aria-label="Cancel" /></>
  }

  const deleteUser = (data) => {
    const confirma = window.confirm("Deseja apagar?");
    if (confirma) {
      axios.delete(`http://localhost:4000/usuarios/${data.id}`)
        .then(res => {
          window.location.reload()
        })
    }
  }

  const Seleciona = (e) => {
    setSelectedUsuarios(e.value)
    setDisplayButton(e.value.length === 0 ? 'none' : 'block')
      }
      

      const deletar = (ee) =>{
        selectedUsuarios.forEach(element => {
          
        });
        setSelectedUsuarios(ee.value)
        const confirma = window.confirm("Deseja apagar?");
        if (confirma) {
          axios.delete(`http://localhost:4000/usuarios/${ee.id}`)
            .then(res => {
              window.location.reload()
            })
        }
      }

  return (
    <div className="card">
      <Button label="deletar" onClick={deletar} className="id" severity="danger" raised
        style={{ display: displayButton }}  >
      </Button>

      <DataTable value={dadosProntos} scrollable scrollHeight="70vh"
        // onRowClick={rowSelect}
        dataKey="id"
        selectionMode={rowClick ? null : 'checkbox'}
        selection={selectedUsuarios}
        onSelectionChange={Seleciona}
        tableStyle={{ minWidth: '50rem' }}>

        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} ></Column>
        <Column field="nome" header="Nome"></Column>
        <Column field="sobrenome" header="Sobrenome"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="genero" header="Genero" ></Column>
        <Column header="Ações" body={botoes} style={{ minWidth: '2rem' }}  ></Column>
      </DataTable>
    </div>
  );
}



export const dadosLoader = async () => {
  const res = await fetch('http://localhost:4000/usuarios')
  return res.json()
}