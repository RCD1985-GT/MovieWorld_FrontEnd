import React, { useState, useEffect } from "react";
import './AdminVerPedidos.css';
import axios from 'axios';
import { connect } from 'react-redux';

const AdminVerPedidos = () => {
   
    // Hook
    const [pedidos, setPedidos] = useState([]);

    // UseEffect de montaje
    useEffect(() => {
    traePedidos();
    }, []);

    // UseEffect de actualizacion
    useEffect(() => {
    });

    // Funcion traer pedidos
    const traePedidos = async () => {

        try {
            let resultado = await axios.get("http://localhost:3300/pedidos/totalPedidos");
            console.log(resultado);
            setPedidos(resultado.data); // SE GUARDA EL RESULTADO EN EL HOOK

        } 
        catch (error) {
            console.log(error);
        }
    };

    if (pedidos[0]?.id != undefined) {
        
        // aqui mapeo porque ya tengo los pedidos

        return (

            <div className="contenidoPedidos">
                
                {pedidos.map(pedido => {
 
                        <div className="itemPedido" key={pedido.id} >
                            <p className="pedido">{pedido.id}</p> 
                            <p className="pedido">{pedido.peliculaId}</p>
                            <p className="pedido">{pedido.usuarioId}</p>
                            <p className="pedido">{pedido.precio}</p>
                            <p className="pedido">{pedido.fechaAlquiler}</p>
                       </div>
                    }
                )  
            } 

            </div>   
        )                 
    
        } else {

            return (
                <div className="diseñoPedido">
                    <div className="contenedorPedido">
                    NO SE HAN CARGADO LOS PEDIDOS
                    </div>
                </div>
            );
        };
    };

    export default AdminVerPedidos;
