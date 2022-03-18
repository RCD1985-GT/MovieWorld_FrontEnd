
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Genero.css';


const Genero = (props) => { 

    // Hook
    const [peliculas, setPeliculas] = useState([])

    // Use effect montaje
    useEffect(()=>{
        traeGenero();
    },[]);


    // Funcion que trae peliculas segun el genero  ....${props.genero}
    const traeGenero = async () => {
        
            try {

            let resultado = await axios.get(`http://localhost:3300/peliculas/${props.genero}`); 
            console.log(resultado)
            setPeliculas(resultado.data);
           

        } catch (error) {
            console.log(error);
        }
    };


    return(

        <div className="contenidoGenero">

        {peliculas.map(item => {

            return (

                <div className="itemGenero" key={item.id}  >
                    <img src={item.poster} alt={item.id}/>
                    <p>{item.titulo}</p>
                </div>
            )


        })
        }


        </div>
    )

}

export default connect((state) => ({
    genero: state.genero
}))(Genero);