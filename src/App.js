
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
import Accion from './Containers/Accion/Accion';
import Animacion from './Containers/Animacion/Animacion';
import Belico from './Containers/Belico/Belico';
import CienciaFiccion from './Containers/CienciaFiccion/CienciaFiccion';
import Clasicos from './Containers/Clasicos/Clasicos';
import Comedia from './Containers/Comedia/Comedia';
import Documental from './Containers/Documental/Documental';
import Drama from './Containers/Drama/Drama';
import Infantil from './Containers/Infantil/Infantil';
import Musical from './Containers/Musical/Musical';
import Romantica from './Containers/Romantica/Romantica';
import Terror from './Containers/Terror/Terror';
import Thriller from './Containers/Thriller/Thriller';
import Western from './Containers/Western/Western';




function App() {
  return (
    <div className="App">
      
    

      <BrowserRouter>

      <Header/>

        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Peliculas" element={<Peliculas/>}/>
        <Route path="/Top20" element={<Top20/>}/>
        <Route path="/Novedades" element={<Novedades/>}/>
        <Route path="/Registro" element={<Registro/>}/>
        <Route path="/Acceso" element={<Acceso/>}/>
        <Route path="/Accion" element={<Accion/>}/>
        <Route path="/Animacion" element={<Animacion/>}/>
        <Route path="/Belico" element={<Belico/>}/>
        <Route path="/CienciaFiccion" element={<CienciaFiccion/>}/>
        <Route path="/Clasicos" element={<Clasicos/>}/>
        <Route path="/Comedia" element={<Comedia/>}/>
        <Route path="/Documental" element={<Documental/>}/>
        <Route path="/Drama" element={<Drama/>}/>
        <Route path="/Infantil" element={<Infantil/>}/>
        <Route path="/Musical" element={<Musical/>}/>
        <Route path="/Romantica" element={<Romantica/>}/>
        <Route path="/Terror" element={<Terror/>}/>
        <Route path="/Thriller" element={<Thriller/>}/>
        <Route path="/Western" element={<Western/>}/>

        </Routes>

        <Footer/>
      </BrowserRouter>

   
    </div>
  );
}

export default App;
