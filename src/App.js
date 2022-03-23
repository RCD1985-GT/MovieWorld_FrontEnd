
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Containers/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Peliculas from "./Containers/Peliculas/Peliculas";
import Top20 from './Containers/Top20/Top20';
import Novedades from './Containers/Novedades/Novedades';
import Registro from './Containers/Registro/Registro';
import Acceso from './Containers/Acceso/Acceso';
import Genero from './Containers/Genero/Genero';
import DetallesPelicula from './Containers/DetallesPelicula/DetallesPelicula';
import Admin from './Containers/Admin/Admin';
import AdminPanel from './Containers/AdminPanel/AdminPanel';
import AdminVerUsuarios from './Containers/AdminVerUsuarios/AdminVerUsuarios';
import AdminVerPedidos from './Containers/AdminVerPedidos/AdminVerPedidos';




function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Header/>

        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/peliculas" element={<Peliculas/>}/>
        <Route path="/top20" element={<Top20/>}/>
        <Route path="/novedades" element={<Novedades/>}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/acceso" element={<Acceso/>}/>
        <Route path="/:genero" element={<Genero/>}/>
        <Route path="/detallesPelicula" element={<DetallesPelicula/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/adminPanel" element={<AdminPanel/>}/>
        <Route path="/adminVerUsuarios" element={<AdminVerUsuarios/>}/>
        {/* <Route path="/adminVerPedidos" element={<AdminVerPedidos/>}/> */}
        </Routes>

        <Footer/>
      </BrowserRouter>

   
    </div>
  );
}

export default App;
