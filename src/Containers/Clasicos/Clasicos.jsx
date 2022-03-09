import React from 'react';
import './Clasicos.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Clasicos = () => {

	let navigate = useNavigate();

	const navegar = (lugar) => {

		console.log("me meto aqui");

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

	return(
	  <div className="diseñoClasicos">
		  <div className="contenedorClasicos">
			CLASICOS
		  </div>
	  </div>
	);
  };
export default Clasicos;