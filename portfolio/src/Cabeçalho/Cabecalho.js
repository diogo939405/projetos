import React from 'react'
import { Outlet } from 'react-router-dom'
import './Cabecalho.css'
import { ToggleP } from './CabecalhoService'

let toggleP = ToggleP

export default function Cabecalho() {
    return (
        <div className='corpo'>
            <header className='cabecalho'>
                <div className='menu'>


                    <nav className='navbar'>
                        <button id="hamburguer" className='hamburger' value='toggle' onClick={toggleP}></button>
                        <p className='titulo'><span>D</span>iogo Favilla</p>
                        <ul className='corpo-menu'>
                            <li>
                                <a>Sobre mim</a>
                            </li>
                            <li >
                                <a>Linguagens</a>
                            </li>
                            <li>
                                <a>Projetos</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </header>

            <Outlet />
        </div>
    )
}
