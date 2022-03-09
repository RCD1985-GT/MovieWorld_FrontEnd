import React from 'react';
import './Comedia.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Comedia = () => {

	let navigate = useNavigate();

	const navegar = (lugar) => {

		console.log("me meto aqui");

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

	return(
	  <div className="diseñoComedia">
		  <div className="contenedorComedia">
			 COMEDIA
		  </div>
	  </div>
	);
  };
export default Comedia;