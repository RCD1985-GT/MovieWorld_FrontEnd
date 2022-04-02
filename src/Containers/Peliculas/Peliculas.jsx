import React, { useState, useEffect } from "react";
import './Peliculas.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { DETALLES_PELICULA } from '../../redux/types';



const Peliculas = (props) => {


    // Navegar
    let navigate = useNavigate();

    const navegar = () => {
        navigate("/detalles");
    }

    // Hook
    const [peliculas, setPeliculas] = useState([]);


    // UseEffect de montaje
    useEffect(() => {
        traePeliculas();
    }, []);


    // UseEffect de desmontaje
    useEffect(() => {
    });


    // Funcion escoger pelicula
    const escogePelicula = (pelicula) => {

        console.log(pelicula);
        //Guardamos la pelicula escogida en REDUX al escoger la pelicula
        props.dispatch({ type: DETALLES_PELICULA, payload: pelicula });


        //Redirigimos a la vista de detalles Pelicula con navigate
        navigate("/detallesPelicula");
    }

    // Funcion traer peliculas

    const traePeliculas = async () => {

        try {

            let resultado = await axios.get("http://localhost:3300/peliculas");
            console.log(resultado);
            setPeliculas(resultado.data); // SE GUARDA EL RESULTADO EN EL HOOK


        } catch (error) {
            console.log(error);
        }
    }

    if (peliculas[0]?.id != undefined) {
        // aqui mapeo porque ya las tengo

        return (

            <div className="contenidoPeliculas">

                {peliculas.map(item => {

                    return (

                        <div className="itemPeliculas" key={item.id} onClick={() => escogePelicula(item)} >
                            <img src={item.poster} alt={item.id} />
                            <p className="titulo">{item.titulo}</p>
                        </div>
                    )
                })
                }


            </div>
        )

    } else {

        return (

            <div className="diseñoPeliculas">

                <div className="contenedorPeliculas">
                    hola soy peliculas

                </div>

            </div>
        );
    }

};

export default connect()(Peliculas);
