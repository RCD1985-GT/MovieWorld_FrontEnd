
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Containers/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Peliculas from "./Containers/Peliculas/Peliculas";
import Top20 from './Containers/Top20/Top20';
import Novedades from './Containers/Novedades/Novedades';





function App() {
  return (
    <div className="App">
      
    <Header/>

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Peliculas" element={<Peliculas/>}/>
        <Route path="/Top20" element={<Top20/>}/>
        <Route path="/Novedades" element={<Novedades/>}/>
        </Routes>
      </BrowserRouter>

    <Footer/>
    </div>
  );
}

export default App;
