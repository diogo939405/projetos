import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CareesLayout() {
  return (
    <div className='carres-layout'>
      
        <h2>careers</h2>
        <p>Essa é a lista de empregos disponiveis</p>

        <Outlet/>
    </div>
  )
}
