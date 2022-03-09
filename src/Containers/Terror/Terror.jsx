import React from 'react';
import './Terror.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Terror = () => {

	let navigate = useNavigate();

	const navegar = (lugar) => {

		console.log("me meto aqui");

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

	return(
	  <div className="diseñoTerror">
		  <div className="contenedorTerror">
			  TERROR
		  </div>
	  </div>
	);
  };
export default Terror;