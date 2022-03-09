import React from 'react';
import './Belico.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Belico = () => {

	let navigate = useNavigate();

	const navegar = (lugar) => {

		console.log("me meto aqui");

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

	return(
	  <div className="diseñoBelico">
		  <div className="contenedorBelico">
			 BELICO
		  </div>
	  </div>
	);
  };
export default Belico;