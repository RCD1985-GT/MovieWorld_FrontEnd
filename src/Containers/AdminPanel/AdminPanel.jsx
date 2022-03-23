import React from 'react';
import './AdminPanel.css';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { PEDIDO } from '../../redux/types'; // NECESITO ESTO¿?
import { DETALLES_PELICULA } from '../../redux/types';

const AdminPanel = () => {

 // Navegar
 let navigate = useNavigate();

 const navegar1 = () => {
      navigate("/adminVerUsuarios"); // AQUI FALTARIA EL DESTINO..PERO TENGO VARIOS
 }
 const navegar2 = () => {
  navigate("/adminVerPedidos"); // AQUI FALTARIA EL DESTINO..PERO TENGO VARIOS
}

return(

	  <div className="diseñoAdminPanel">
          
          <div className="contenedorPanel">

                <div className="dato" onClick={()=>navegar1("/adminVerUsuarios")}>VER USUARIOS</div>
                
                <div className="dato" onClick={()=>navegar2("/adminVerPedidos")}>VER PEDIDOS</div>
            

          </div>




	  </div>
	);
  };

// QUE VOY A NECESITAR:
//-que conecte a Redux.... import { connect } from 'react-redux'; + connect() dentro de export default
// const AdminPanel = (props) => {...añado props


export default connect() (AdminPanel);

// export default connect((state) => ({
//     peliculaSeleccionada: state.peliculaSeleccionada,
//     pedido: state.pedido,
// 	  credenciales: state.credenciales  // NO ME TRAE LAS CREDENCIALES
// }))(AdminPanel);