import { useLoaderData } from "react-router-dom"
import './estilo/Inicio.css'


export default function Inicio() {
const dadosProntos = useLoaderData()

  return (
    <div className='tabela'>
      <table class="table-view">
        <fieldset>
  <thead>
    <tr className="Cabeçalho">
      <th scope="col">Nome</th>
      <th scope="col">Sobrenome</th>
      <th scope="col">Email</th>
      <th scope="col">Genero</th>
    </tr>
  </thead>
  <tbody className="corpo-tabela">
      {dadosProntos.map(dadosProntos =>(
         <tr className="Conteudo" > 
            <td className="dados" width='30%'> {dadosProntos.Nome}</td>
            <td className="dados" width='20%'>{dadosProntos.Sobrenome}</td>
            <td className="dados" width='40%'>{dadosProntos.email}</td>
            <td className="dados" width='10%'>{dadosProntos.Genero}</td>
         </tr>
         
        
      ))}
  </tbody>
  </fieldset>
</table>
    </div>
  )
}

export const dadosLoader = async () =>{
   const res = await fetch ('https://my.api.mockaroo.com/form.json?key=aa93c710')



   return res.json()
}
