import React, { useState, useEffect } from "react";
import './AdminVerUsuarios.css';
import axios from 'axios';
import { connect } from 'react-redux';

const AdminVerUsuarios = () => {

    // Hook
    const [usuarios, setUsuarios] = useState([]);

    // UseEffect de montaje
    useEffect(() => {
        traeUsuarios();
    }, []);

    // UseEffect de actualizacion
    useEffect(() => {
        
    });

    // Funcion traer usuarios
    const traeUsuarios = async (props) => {

        let config = {
            headers: { Authorization: `Bearer ${props.credenciales.token}` }
        };


        try {
            let resultado = await axios.get("http://localhost:3300/usuarios", config);
            console.log(resultado);
            setUsuarios(resultado.data); // SE GUARDA EL RESULTADO EN EL HOOK

        } catch (error) {
            console.log(error);
        }
    }

    if (usuarios[0]?.id != undefined) { // DONDE VA ESTE IF¿?
        // aqui mapeo porque ya tengo los usuarios

        return (
            <div className="contenidoUsuarios">

                {usuarios.map(usuario => {

                    return (
                        <div className="itemUsuario" key={usuario.id} >
                            <p className="usuario">{usuario.nombre}</p>
                            <p className="usuario">{usuario.apellido}</p>
                            <p className="usuario">{usuario.email}</p>
                        </div>
                    )
                })
            }

            </div>
        )

        } else {
            return (
                <div className="diseñoUsuarios">
                    <div className="contenedorUsuarios">
                    NO SE HA CARGADO LOS USUARIOS
                    </div>
                </div>
            );
        }
};

export default AdminVerUsuarios;

