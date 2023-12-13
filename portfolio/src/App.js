import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Cabecalho from './Cabeçalho/Cabecalho'
import BlocoPrincipal from './Conteudo/BlocoPrincipal/BlocoPrincipal'
  
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Cabecalho />}>
      <Route path="BlocoPrincipal" element={<BlocoPrincipal />}></Route>
      <Route index element={<BlocoPrincipal />} />
      {/* <Route path="blocoPrincipal" element={<blocoPrincipal/>}/>
        <Route index element={<blocoPrincipal/>}/> */}
    </Route>
  )
)


function App() {
  return (
    <div >
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
