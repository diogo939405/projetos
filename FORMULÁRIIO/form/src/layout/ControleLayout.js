import React from "react";
import { Outlet,NavLink } from 'react-router-dom'



export default function controleLayout() {
  return (
    <div className='botao-menu'>
    <header>
      <nav className="nav-controle">
        
   <NavLink to="/Home/Funcionalidades/Adicionar"><button>Adicionar </button></NavLink>
   <NavLink to="/Home/Funcionalidades/Remover"><button>Remover</button></NavLink> 
  
   </nav>
   </header>
   <main>
    <Outlet/>
    </main>
      
  </div>
)
}