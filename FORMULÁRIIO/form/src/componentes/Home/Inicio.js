import { useLoaderData,useNavigate} from "react-router-dom"
import './estilo/Inicio.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import React, { useState} from 'react';
import axios from "axios"



export default function Inicio() {
 const [usuarioAtual, setUsuarioAtual] = useState({});
 const nav = useNavigate();

 // useEffect(() => {
 // // Update the document title using the browser API
 // this.usuarioAtual = {};
 // });

 const [selectedUsuarios, setSelectedUsuarios] = useState([]);
 const dadosProntos = useLoaderData();
 const [rowClick, setRowClick] = useState(true);
 
 const rowSelect = (row) => {
 console.log('=======================', selectedUsuarios);
 setUsuarioAtual(row.data)
 };

 
 
 // const botaoDelete = (rowData) => {
 // return <Button onClick={() =>
 // deleteUser(rowData)} icon="pi pi-times" rounded severity="danger" aria-label="Cancel" />
 // };

const botaoUpdate = (rowdata) =>{
 // console.log(rowdata)
 return <Button onClick={() =>
 nav("/Home/Alterar/", { state:rowdata})} icon="pi pi-times" rounded severity="danger" aria-label="Cancel" />
 
 }
 

 
 



// const deleteUser = (data) => {
// const confirma = window.confirm("Deseja apagar?");
// if(confirma){
// axios.delete(`http://localhost:4000/usuarios/${data.id}`)
// .then(res =>{
//  window.location.reload()
// })
// // .catch(err => console.log("erro"));
// }
 
// }


 return (
 
 <div className="card">
 {/* <h1>{ selectedUsuarios.length}</h1> */}

 
 <DataTable value={dadosProntos} scrollable scrollHeight="70vh"
 // onRowClick={rowSelect}
 dataKey="id"
 selectionMode={rowClick ? null : 'checkbox'}
 selection={selectedUsuarios}
 onSelectionChange={(e) => setSelectedUsuarios(e.value)}
 tableStyle={{ minWidth: '50rem' }}>
  <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
  <Column field="nome" header="Nome"></Column>
  <Column field="sobrenome" header="Sobrenome"></Column>
  <Column field="email" header="Email"></Column>
  <Column field="genero" header="Genero" ></Column>
  <Column header="Ações" body={botaoUpdate} style={{ minWidth: '2rem' }} ></Column>
 </DataTable>
 </div>
);


 
}



export const dadosLoader = async () =>{
 const res = await fetch ('http://localhost:4000/usuarios')
 return res.json()
}


// // return (
// // <div className='tabela'>
// // <table class="table-view">
// //  <fieldset>
// // <thead>
// // <tr className="Cabeçalho">
// // <th scope="col">Nome</th>
// // <th scope="col">Sobrenome</th>
// // <th scope="col">Email</th>
// // <th scope="col">Genero</th>
// // </tr>
// // </thead>
// // <tbody className="corpo-tabela">
// // {dadosProntos.map(dadosProntos =>(
// //  <tr className="Conteudo" > 
// //  <td className="dados" width='30%'> {dadosProntos.Nome}</td>
// //  <td className="dados" width='20%'>{dadosProntos.Sobrenome}</td>
// //  <td className="dados" width='40%'>{dadosProntos.email}</td>
// //  <td className="dados" width='10%'>{dadosProntos.Genero}</td>
// //  </tr>
  
 
// // ))}
// // </tbody>
// // </fieldset>
// // </table>
// </div>