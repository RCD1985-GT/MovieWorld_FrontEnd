import React from "react"; 
import './Acceso.css';

const Acceso = () => {
    return(
        <div className="diseñoAcceso">
          <div className="formularioAcceso">
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña"/>
            <button>Acceder</button>
          </div>
        </div>
    );
};

export default Acceso;
