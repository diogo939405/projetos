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
     <NavLink to="/Home/Funcionalidades"><button>Funcionalidades </button></NavLink>

     <NavLink to="/Home/Alterar"><button>Alterar</button></NavLink>
{/* 
      <div className='Icon'>
      <i className="pi pi-check" style={{ fontSize: '1rem',color:'white' }}></i>
      </div> */}
       </nav> 
       {/* <div className='Mobile'>
       <NavLink to="/Home/Inicio">Home</NavLink>
     <NavLink to="/Home/Adicionar">Adicionar</NavLink>
     <NavLink to="/Home/Remover">Remover</NavLink> 
     <NavLink to="/Home/Alterar">Alterar</NavLink>
       </div> */}
     </header>
     <main>
      <Outlet/>
      </main>
        
    </div>
  )
}