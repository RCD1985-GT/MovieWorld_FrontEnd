import React from 'react';
import './Home.css';
import {useNavigate} from 'react-router-dom';


const Home = () => {

    let navigate = useNavigate();

	const navegar = (lugar) => {

		console.log("me meto aqui");

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }


    return(
        <div className='diseñoHome'>
         
             <div className="contenedorInfo"> 
                <div className='infoGeneros'>
                <b>Bienvenido a Movie World</b>
                </div>
            </div>
            <div className="contenedorGeneros">

                <div className="bloque1Generos">
                    <div className="bloque1Generos1" onClick={()=>navegar("/accion")}>ACCION</div>
                    <div className="bloque1Generos2" onClick={()=>navegar("/animacion")}>ANIMACION</div>
                    <div className="bloque1Generos3" onClick={()=>navegar("/belico")}>BELICO</div>
                    <div className="bloque1Generos4" onClick={()=>navegar("/cienciaficcion")}>CIENCIA FICCION</div>
                </div>

                <div className="bloque2Generos">
                    <div className="bloque2Generos1" onClick={()=>navegar("/clasicos")}>CLASICOS</div>
                    <div className="bloque2Generos2" onClick={()=>navegar("/comedia")}>COMEDIA</div>
                    <div className="bloque2Generos3" onClick={()=>navegar("/documental")}>DOCUMENTAL</div>
                    <div className="bloque2Generos4" onClick={()=>navegar("/drama")}>DRAMA</div>
                </div>

                <div className="bloque3Generos">
                    <div className="bloque3Generos1" onClick={()=>navegar("/infantil")}>INFANTIL</div>
                    <div className="bloque3Generos2" onClick={()=>navegar("/musical")}>MUSICAL</div>
                    <div className="bloque3Generos3" onClick={()=>navegar("/romantica")}>ROMANTICA</div>
                    <div className="bloque3Generos4" onClick={()=>navegar("/terror")}>TERROR</div>
                </div>

                <div className="bloque4Generos">
                    <div className="bloque4Generos1" onClick={()=>navegar("/thriller")}>THRILLER</div>
                    <div className="bloque4Generos2" onClick={()=>navegar("/western")}>WESTERN</div>
                    <div className="bloque4Generos3" ></div>
                    <div className="bloque4Generos4"></div>
                </div>

            </div>    

        </div>
    )   
};

export default Home;
