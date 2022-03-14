
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
        <Route path="/genero" element={<Genero/>}/>


        </Routes>

        <Footer/>
      </BrowserRouter>

   
    </div>
  );
}

export default App;
