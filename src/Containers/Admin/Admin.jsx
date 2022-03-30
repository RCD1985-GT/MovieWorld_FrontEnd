import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


import './Admin.css';

const LoginAdmin = () => {

    let navigate = useNavigate();

    // Hooks 
    // const [credenciales, setCredenciales] = useState("");
    const [datosUsuario, setDatosUsuario] = useState({email: "", password: ""});
    const [msgError, setMsgError] = useState("");
    const [msgError2, setMsgError2] = useState("");

    // Funciones handlers
    const rellenarDatos = (e) => {
        //Funcion handler que setea los datos en el hook...[e.target.name] obtiene 
        //el nombre de la propiedad a cambiar, e.target.value tiene el valor..ambos
        //obtienen los datos del evento, que es el hecho de escribir en un input en concreto
        setDatosUsuario({...datosUsuario, [e.target.name]: e.target.value})
    };

    // Funcion chequea password
    const checkPassword = (e) => {

        if(e.target.value.length < 4){
            setMsgError("EL password debe de tener 4 caracteres");
        } else {
            setMsgError("");
        }

    };

    // UseEffect de montaje
    // UseEffect de montaje
    //    (()=>{
    // },[]);


    // UseEffect de actualizacion
    // useEffect(()=>{
    // });


    //Funcion Login

    const login = async () => {

     if(datosUsuario?.password === "admin"){ 

            setTimeout(()=>{
                navigate("/adminPanel"); 
            }, 1000);
        };

        try {

            let body = {
                 email: datosUsuario.email,
                 password: datosUsuario.password
            }

            let resultado = await axios.post("http://localhost:3300/usuarios/login",body); 

            
            if(resultado.data === "Usuario o contraseña inválido"){ // mirar esta linea
                setMsgError2("Usuario o contraseña inválido")
            }else{

                // setCredenciales(resultado.data);
            }


        } catch (error) {

            console.log(error)

        }
};


return(
            
            <div className='diseñoAccesoAdmin'>
                 {/* {<pre>{JSON.stringify(datosUsuario, null,2)}</pre>} */}
                <div className="diseñoFormularioAdmin">
                <p>ACCESO ADMIN</p>
                    <input type="email" name="email" id="email" title="email" placeholder="Correo Electrónico" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input type="password" name="password" id="password" title="password" placeholder="Contraseña" autoComplete="off" onChange={(e)=>{rellenarDatos(e); checkPassword(e)}}/>
                    {msgError}
                    {msgError2}
                    <button className='botonAcceder' onClick={()=>login()}>Acceder </button>
             </div>               
            </div>
        );
    };
    

export default LoginAdmin;