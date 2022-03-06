import React from 'react';
import './Home.css';

import Link from '../../Components/Link/Link';

const Home = () => {


    return(
        <div className='diseñoHome'>
            <Link destino={"Registro"} url={"/registro"}/>
            <Link destino={"Acceso"} url={"/acceso"}/>
        </div>
    )   
};

export default Home;
