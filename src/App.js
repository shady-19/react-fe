
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from "react-router-dom"

import Home from './Components/Home';
import Doctors from './Components/Doctors';
import Appointbook from './Components/Appointbook';
import Checkapp from './Components/Checkapp';

function App() {
  return (
    <>
    
    <BrowserRouter>
   <Routes>
   <Route index element={<Home/>}></Route>
   <Route path='appointment' element= {<Appointbook/>}/>
  <Route path='check' element= {<Checkapp/>}/>
  <Route path='home' element= {<Home/>}/>
  
  <Route path='doctors' element= {<Doctors/>}/>
  
  
  </Routes>
   </BrowserRouter>
    
    </> 
   
  )
}

export default App;
