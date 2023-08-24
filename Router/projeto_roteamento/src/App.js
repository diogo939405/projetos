
import './App.css';

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";

import { contactAction } from './pages/help/Contact';

import Home from './pages/home';
import About from './pages/about';
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import Careers, { careersLoader } from './pages/Careers/Careers';
import CareersDetails,{careerDetailsLoader} from './pages/Careers/CareersDetails';


import RootLayout from './layout/RootLayout';
import HelpLayout from './layout/HelpLayout';
import CareesLayout from './layout/CareesLayout';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route  index element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        
        <Route path="help" element={<HelpLayout/>}>
          <Route path="faq" element={<Faq/>}/>
          <Route path="contact" element={<Contact/>}action={contactAction}/>
      </Route>

      <Route path='careers' element ={<CareesLayout/>}>
          <Route 
          index
          element={<Careers/>}
         loader={careersLoader}
          />

          <Route 
            path=":id"
            element={<CareersDetails/>}
            loader={careerDetailsLoader}
          />  

      </Route>

      </Route>
  
    


  )
)

function App() {
  return (
  
 /* */
    
  <RouterProvider router={router}/>
  
    
  );
}

export default App;
