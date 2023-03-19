// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Accueil';
import Contact from './pages/Contact';
import Tarifs from './pages/Tarifs';
import Galerie from './pages/Galerie';
import Layout from './pages/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      
      
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>} > 
    
    <Route path='/' element={<Home/>} />
    <Route path='/galerie' element={<Galerie/>} />
    <Route path='/tarifs' element={<Tarifs/>} />
    <Route path='/contact' element={<Contact/>} />
    
    </Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
