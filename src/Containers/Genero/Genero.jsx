
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './Genero.css';
import { DETALLES_PELICULA } from '../../redux/types';


const Genero = (props) => { 

    // Navegar
    let navigate = useNavigate();

    const navegar = () => {
            navigate("/detalles");
    }

    // Hook
    const [peliculas, setPeliculas] = useState([])

    // Use effect montaje
    useEffect(()=>{
        traeGenero();
    },[]);


 // Funcion escoger pelicula
 const escogePelicula = (pelicula) => {
            
    console.log(pelicula);
    //Guardamos la pelicula escogida en REDUX al escoger la pelicula
    props.dispatch({type:DETALLES_PELICULA, payload: pelicula});
    console.log("peliculas guardadas en Redux")


    //Redirigimos a la vista de detalles Pelicula con navigate
    navigate("/detallesPelicula"); 
}

    // Funcion que trae peliculas segun el genero  ....${props.genero}
    const traeGenero = async () => {
        console.log("entro enfuncion que trae genero")
            try {

            let resultado = await axios.get(`http://localhost:3300/peliculas/${props.genero}`); 
            console.log(resultado)
            setPeliculas(resultado.data);
            console.log("peliculas guardadas en Hook")
           

        } catch (error) {
            console.log(error);
        }
    };


    return(

        <div className="contenidoGenero">

        {peliculas.map(item => {

            return (

                <div className="itemGenero" key={item.id} onClick={()=>escogePelicula(item)} >
                    <img src={item.poster} alt={item.id}/>
                    <p className="titulo">{item.titulo}</p>
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