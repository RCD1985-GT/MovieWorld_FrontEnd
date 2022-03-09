import React from 'react';
import './Drama.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Drama = () => {

	let navigate = useNavigate();

	const navegar = (lugar) => {

		console.log("me meto aqui");

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

	return(
	  <div className="diseñoDrama">
		  <div className="contenedorDrama">
			  DRAMA
		  </div>
	  </div>
	);
  };
export default Drama;