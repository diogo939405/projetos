import { useLoaderData } from "react-router-dom"
import './estilo/Inicio.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export default function Inicio() {
const dadosProntos = useLoaderData()

return (
  <div className="card">
      <DataTable value={dadosProntos} scrollable scrollHeight="70vh"  tableStyle={{ minWidth: '50rem' }}>
          <Column field="Nome" header="Nome"></Column>
          <Column field="Sobrenome" header="Sobrenome"></Column>
          <Column field="email" header="email"></Column>
          <Column field="Genero" header="genero"></Column>
      </DataTable>
  </div>
);

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
  
}

export const dadosLoader = async () =>{
   const res = await fetch ('http://localhost:4000/usuarios')
   return res.json()
}
