import React, { useState, useEffect } from "react";
import './Novedades.css';
import axios from 'axios';


const Novedades = () => {

    // Hook
    const [novedades, setNovedades] = useState([]);


    // UseEffect de montaje
    useEffect(() => {
        traeNovedades();
    }, []);


    // UseEffect de desmontaje
    useEffect(() => {

    });

    // Funcion traer peliculas

    const traeNovedades = async () => {

        try {
            let resultado = await axios.get("http://localhost:3300/peliculas/novedades");
            console.log(resultado)
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
                            {/* <p>{item.año}</p>
                            <p>{item.genero}</p> */}
                          
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

export default Novedades;
