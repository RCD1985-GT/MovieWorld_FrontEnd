import React from 'react';
import './Western.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Western = () => {

	let navigate = useNavigate();

	const navegar = (lugar) => {

		console.log("me meto aqui");

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

	return(
	  <div className="diseñoWestern">
		  <div className="contenedorWestern">
			  WESTERN
		  </div>
	  </div>
	);
  };
export default Western;