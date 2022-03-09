import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Components/Link/Link.css';

const Link = (props) => {

    let navigate = useNavigate();
    const llevame = () => {
        navigate(props.url);
    };

    return (
        <div className='diseñoLink' onClick={()=>llevame()}>
            {props.destino}
        </div>
    )
}
export default Link;

