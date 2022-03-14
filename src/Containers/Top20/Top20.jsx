import React, { useState, useEffect } from "react";
import './Top20.css';
import axios from 'axios';


const Top20 = () => {

    // Hook
    const [top20, setTop20] = useState([]);


    // UseEffect de montaje
    useEffect(() => {
        traeTop20();
    }, []);


    // UseEffect de desmontaje
    useEffect(() => {

    });


    // Funcion traer peliculas

    const traeTop20 = async () => {

        try {
            let resultado = await axios.get("http://localhost:3300/peliculas/peliculas");
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
                        <div className="item" key={item.id} >

                            <p>{item.titulo}</p>
                            <p>{item.año}</p>
                            <p>{item.genero}</p>
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
                    hola soy Top20
                </div>
            </div>
        );
    }


};

export default Top20;
