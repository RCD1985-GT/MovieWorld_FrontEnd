import React from 'react';
import './Documental.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Documental = () => {

	let navigate = useNavigate();

	const navegar = (lugar) => {

		console.log("me meto aqui");

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

	return(
	  <div className="diseñoDocumental">
		  <div className="contenedorDocumental">
			  DOCUMENTAL
		  </div>
	  </div>
	);
  };
export default Documental;