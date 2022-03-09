import React from 'react';
import './Musical.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Musical = () => {

	let navigate = useNavigate();

	const navegar = (lugar) => {

		console.log("me meto aqui");

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

	return(
	  <div className="diseñoMusical">
		  <div className="contenedorMusical">
			  MUSICAL
		  </div>
	  </div>
	);
  };
export default Musical;