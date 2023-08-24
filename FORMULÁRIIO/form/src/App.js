import React from 'react'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';




import BemVindo from './layout/BemVindo';
import Login from './componentes/login/login';
import Inicio, { dadosLoader } from './componentes/Home/Inicio';
import Adicionar from './componentes/Home/Funcionalidades/Adicionar';
import Alterar from './componentes/Home/Alterar';
import Remover from './componentes/Home/Funcionalidades/Remover';
import MenuLayout from './layout/MenuLayout';
import ControleLayout from './layout/ControleLayout';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BemVindo />}>
      <Route path="Login" element={<Login />} />
      <Route index element={<Login />} />

      <Route path='Home' element={<MenuLayout />}>
        <Route path='Inicio'
          element={<Inicio />}
          loader={dadosLoader}
        />
        <Route exact path="Alterar" element={<Alterar />} />

        <Route path='Funcionalidades' element={<ControleLayout />}>
          <Route path='Adicionar' element={<Adicionar />} />
          <Route path='Remover' element={<Remover />} />

        </Route>




      </Route>



    </Route>

  ))


//  <Route path="/" element={<BemVindo/>}>
//   //     <Route  index element={<BemVindo/>}/>
//   //     <Route path="About" element={<BemVindo/>}/>

//   //     <Route path="help" element={<BemVindo/>}>
//   //       <Route path="faq" element={<BemVindo/>}/>
//   //       <Route path="contact" element={<BemVindo/>}/>
//   //   </Route>

//   //   <Route path='careers' element ={<BemVindo/>}>
//   //       <Route 
//   //       index
//   //       //element={<Careers/>}
//   //     // loader={careersLoader}
//   //       />

//   //       <Route 
//   //         path=":id"
//   //        // element={<CareersDetails/>}
//   //        // loader={careerDetailsLoader}
//   //       /> 




function App() {
  return (

    <RouterProvider router={router} />
  );
}

export default App;