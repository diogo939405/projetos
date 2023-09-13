import { useLoaderData } from "react-router-dom"
import './estilo/Inicio.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import React, { useState, useEffect } from 'react';
import axios from "axios"

export default function Inicio() {
  const [usuarioAtual, setUsuarioAtual] = useState({});

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   this.usuarioAtual = {};
  // });


const dadosProntos = useLoaderData()
const rowSelect = (row) =>{
  console.log('=======================', row.data.id, row.data);
  setUsuarioAtual(row.data)
}
const botaoDelete = (rowData) =>{
  return <Button onClick={() => 
    deleteUser(rowData)} icon="pi pi-times" rounded severity="danger" aria-label="Cancel"   />
}

  const deleteUser = (data) => {
  console.log('ON DELETE ',data);
   axios.delete(`http://localhost:4000/usuarios/${data.id}`)
   .then(res =>{
    // console.log("AAAAAAAAAAAAAAAAA")
   })
  //  .catch(err => console.log("erro"))
  
}

  

 
const botaoAlterar = () =>{
  return <Button icon="pi pi-search" severity="success" aria-label="Search" />
}

  return (
    
  <div className="card">
      <h1>{ usuarioAtual.nome}</h1>
      <DataTable value={dadosProntos} scrollable scrollHeight="70vh"  
      onRowClick={rowSelect}
      selectionMode={'single'}
      tableStyle={{ minWidth: '50rem' }}>
          <Column field="nome" header="Nome"></Column>
          <Column field="sobrenome" header="Sobrenome"></Column>
          <Column field="email" header="email"></Column>
          <Column field="genero" header="genero" ></Column>
          <Column  header="Ações" body={botaoDelete} style={{ minWidth: '2rem' }} ></Column>
      </DataTable>
  </div>
);


  
}



export const dadosLoader = async () =>{
   const res = await fetch ('http://localhost:4000/usuarios')
   return res.json()
}


// //   return (
// //     <div className='tabela'>
// //       <table class="table-view">
// //         <fieldset>
// //   <thead>
// //     <tr className="Cabeçalho">
// //       <th scope="col">Nome</th>
// //       <th scope="col">Sobrenome</th>
// //       <th scope="col">Email</th>
// //       <th scope="col">Genero</th>
// //     </tr>
// //   </thead>
// //   <tbody className="corpo-tabela">
// //       {dadosProntos.map(dadosProntos =>(
// //          <tr className="Conteudo" > 
// //             <td className="dados" width='30%'> {dadosProntos.Nome}</td>
// //             <td className="dados" width='20%'>{dadosProntos.Sobrenome}</td>
// //             <td className="dados" width='40%'>{dadosProntos.email}</td>
// //             <td className="dados" width='10%'>{dadosProntos.Genero}</td>
// //          </tr>
         
        
// //       ))}
// //   </tbody>
// //   </fieldset>
// // </table>
//     </div>