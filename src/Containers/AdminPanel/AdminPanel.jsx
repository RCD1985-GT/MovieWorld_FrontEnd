import React from 'react';
import './AdminPanel.css';
import {useNavigate} from 'react-router-dom';


const AdminPanel = () => {
console.log("entro en AdminPanel")
 // Navegar
 let navigate = useNavigate();

 const navegar1 = () => {
      navigate("/adminVerUsuarios"); 
 }
 const navegar2 = () => {
  navigate("/adminVerPedidos"); 
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


export default AdminPanel;

