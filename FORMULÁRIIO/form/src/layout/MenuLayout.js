import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'



export default function MenuLayout() {
  return (
    <div className='botao-menu'>
      <header>
        <nav>
          {/* retirar esses button dps */}
          <h1 >Sistema de cadastro</h1>
     <NavLink to="/Home/Inicio"><button >Home </button></NavLink>
     <NavLink to="/Home/Adicionar"><button>Adicionar </button></NavLink>
     <NavLink to="/Home/Remover"><button>Remover</button></NavLink> 
     <NavLink to="/Home/Alterar"><button>Alterar</button></NavLink>
       </nav> 
     </header>
     <main>
      <Outlet/>
      </main>
        
    </div>
  )
}