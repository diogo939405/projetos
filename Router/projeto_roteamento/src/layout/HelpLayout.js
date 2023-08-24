import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className='help-layout'>
      <h2>Website Help</h2>
      <p>Diogo esta estudando vlw, não pertube</p>

      <nav>
      <h1>Diogo</h1>
      <NavLink to="faq">View Faq</NavLink>
      <NavLink to="contact">Contact Us</NavLink>
    </nav>

      <Outlet/>
    </div>
  )
}
