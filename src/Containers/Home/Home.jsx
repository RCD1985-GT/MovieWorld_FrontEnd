import React from 'react';
import './Home.css';

import Link from '../../Components/Link/Link';

const Home = () => {


    return(
        <div className='diseñoHome'>
            <Link destino={"Registro"} url={"/registro"}/>
            <Link destino={"Acceso"} url={"/acceso"}/>
             <div className="contenedorInfo"> 
                <div className='infoGeneros'>
                <b>Bienvenido a Movie World</b>
                </div>
            </div>
            <div className="contenedorGeneros">

                <div className="bloque1Generos">
                    <div className="bloque1Generos1">ACCION</div>
                    <div className="bloque1Generos2">ANIMACION</div>
                    <div className="bloque1Generos3">BELICO</div>
                    <div className="bloque1Generos4">CIENCIA FICCION</div>
                </div>

                <div className="bloque2Generos">
                    <div className="bloque2Generos1">CLASICOS</div>
                    <div className="bloque2Generos2">COMEDIA</div>
                    <div className="bloque2Generos3">DOCUMENTAL</div>
                    <div className="bloque2Generos4">DRAMA</div>
                </div>

                <div className="bloque3Generos">
                    <div className="bloque3Generos1">INFANTIL</div>
                    <div className="bloque3Generos2">MUSICAL</div>
                    <div className="bloque3Generos3">ROMANTICA</div>
                    <div className="bloque3Generos4">TERROR</div>
                </div>

                <div className="bloque4Generos">
                    <div className="bloque4Generos1">THRILLER</div>
                    <div className="bloque4Generos2">WSETERN</div>
                    <div className="bloque4Generos3"></div>
                    <div className="bloque4Generos4"></div>
                </div>

            </div>    

        </div>
    )   
};

export default Home;
