
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Containers/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";





function App() {
  return (
    <div className="App">
      
    <Header/>

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>

    <Footer/>
    </div>
  );
}

export default App;
