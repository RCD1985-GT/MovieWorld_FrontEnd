
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


const Genero = (props) => {

    // Hook
    const [peliculas, setPeliculas] = useState([])

    // Use effect montaje
    useEffect(()=>{

        traeGenero();
    },[]);



    const traeGenero = async () => {
        
    

            try {

            let resultado = await axios.get(`http://localhost:3300/peliculas/:${props.genero}`);
                
            setPeliculas(resultado.data);
           

        } catch (error) {
            console.log(error);
        }
    };




       

    return(
        <div>{props.genero}</div>
    )

}

export default connect((state) => ({
    genero: state.genero
}))(Genero);