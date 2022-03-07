import React from "react"; 
import './Peliculas.css';

const Peliculas = () => {
    return(
        <div className="diseñoPeliculas">
            <div className="carruselAccion"></div>
            <div className="carruselAnimacion"></div>
            <div className="carruselBelico"></div>           
            <div className="carruselCienciaFiccion"></div>
            <div className="carruselClasicos"></div>
            <div className="carruselComedia"></div>
            <div className="carruselDocumental"></div>
            <div className="carruselDrama"></div>
            <div className="carruselInfantil"></div>
            <div className="carruselMusical"></div>
            <div className="carruselRomantica"></div>
            <div className="carruselTerror"></div>
            <div className="carruselThriller"></div>
            <div className="carruselWestern"></div>
        </div>
    );
};

export default Peliculas;
