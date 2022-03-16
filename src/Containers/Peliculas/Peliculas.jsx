import React, { useState, useEffect } from "react";
import './Peliculas.css';
import axios from 'axios';
import DetallesPelicula from "../DetallesPelicula/DetallesPelicula";
import {useNavigate} from 'react-router-dom';



const Peliculas = () => {


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


    // Funcion traer peliculas

    const traePeliculas = async () => {

        try {

            let resultado = await axios.get("http://localhost:3300/peliculas");

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

                        <div className="itemPeliculas" key={item.id} onClick={()=>navegar("/detalles")} >
                            <img src={item.poster} alt={item.id}/>
                            <p>{item.titulo}</p>
                            {/* <p>{item.sinopsis}</p> */}
                            
                            
                            
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

export default Peliculas;
