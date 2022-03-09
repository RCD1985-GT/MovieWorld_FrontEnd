import React from 'react';
import './Thriller.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Thriller = () => {

	let navigate = useNavigate();

	const navegar = (lugar) => {

		console.log("me meto aqui");

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

	return(
	  <div className="diseñoThriller">
		  <div className="contenedorThriller">
			  THRILLER
		  </div>
	  </div>
	);
  };
export default Thriller;