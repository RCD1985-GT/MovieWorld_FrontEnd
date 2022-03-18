import React, { useState, useEffect } from "react";
import './Novedades.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { DETALLES_PELICULA } from '../../redux/types';



const Novedades = (props) => {

    // Navegar
    let navigate = useNavigate();

    const navegar = () => {
        navigate("/detalles");
    }


    // Hook
    const [novedades, setNovedades] = useState([]);


    // UseEffect de montaje
    useEffect(() => {
        traeNovedades();
    }, []);


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

    // Funcion traer peliculas Novedades

    const traeNovedades = async () => {

        try {
            let resultado = await axios.get("http://localhost:3300/peliculas/novedades");
            console.log(resultado);
            setNovedades(resultado.data); // SE GUARDA EL RESULTADO EN EL HOOK

        } catch (error) {
            console.log(error);
        }
    }
    if (novedades[0]?.id != undefined) {
        // aqui mapeo porque ya las tengo

        return (
            <div className="contenidoNovedades">
                {novedades.map(item => {

                    return (
                        <div className="itemNovedades" key={item.id} >
                            <img src={item.poster} alt={item.id}/>
                            <p>{item.titulo}</p>
                        </div>
                    )
                })
                }
            </div>
        )

    } else {
        return (
            <div className="diseñoNovedades">
                <div className="contenedorNovedades">
                NO SE HA CARGADO LA PAGINA NOVEDADES
                </div>
            </div>
        );
    }


};

export default connect()(Novedades);
