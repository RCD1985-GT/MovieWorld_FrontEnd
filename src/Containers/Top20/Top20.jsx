import React, { useState, useEffect } from "react";
import './Top20.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { DETALLES_PELICULA } from '../../redux/types';


const Top20 = (props) => {

   // Navegar
  let navigate = useNavigate();

  const navegar = () => {
         navigate("/detalles");
  }

    // Hook
    const [top20, setTop20] = useState([]);


    // UseEffect de montaje
    useEffect(() => {
        traeTop20();
    },[]);


    // UseEffect de desmontaje
    useEffect(() => {
    });


 // Funcion escoger pelicula
 const escogePelicula = (pelicula) => {
            
    console.log(pelicula);
    //Guardamos la pelicula escogida en REDUX al escoger la pelicula
    props.dispatch({type:DETALLES_PELICULA, payload: pelicula});


    //Redirigimos a la vista de detalles Pelicula con navigate
    navigate("/detallesPelicula"); 
}

    // Funcion trae peliculas Top20

    const traeTop20 = async () => {

        try {
            let resultado = await axios.get("http://localhost:3300/peliculas/top20");
            console.log(resultado); // ME DEVUELVE UN ARRAY VACIO
            setTop20(resultado.data); // SE GUARDA EL RESULTADO EN EL HOOK

        } catch (error) {
            console.log(error);
        }
    }
    if (top20[0]?.id != undefined) {
        // aqui mapeo porque ya las tengo

        return (
            <div className="contenidoTop20">
                
                {top20.map(item => {

                    return (
                        <div className="itemTop20" key={item.id} onClick={()=>escogePelicula(item)}>
                            <img src={item.poster} alt={item.id}/>
                            <p className="titulo">{item.titulo}</p>     
                        </div>
                    )
                })
                }
            </div>
        )

    } else {

        return (
            <div className="diseñoTop20">
                <div className="contenedorTop20">
                NO SE HA CARGADO LA PAGINA TOP20
                </div>
            </div>
        );
    }

};

export default connect()(Top20);

