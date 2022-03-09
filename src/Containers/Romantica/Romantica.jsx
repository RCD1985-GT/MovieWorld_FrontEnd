import React from 'react';
import './Romantica.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Romantica = () => {

	let navigate = useNavigate();

	const navegar = (lugar) => {

		console.log("me meto aqui");

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

	return(
	  <div className="diseñoRomantica">
		  <div className="contenedorRomantica">
			  ROMANTICA
		  </div>
	  </div>
	);
  };
export default Romantica;