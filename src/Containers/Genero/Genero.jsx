
// import React from 'react';
// import { connect } from 'react-redux';
// import axios from 'axios';


// const Genero = (props) => {

//     const traeGenero = async () => {
        
//     const [peliculas, setPeliculas] = useState([])

//             try {

//             let resultado = await axios.get("http://localhost:3300/peliculas/:genero");
                
//             setPeliculas(resultado.data);
           

//         } catch (error) {
//             console.log(error);
//         }
//     };




//         //en el axios metes ${props.genero}
    

//     return(
//         <div>{props.genero}</div>
//     )

// }

// export default connect((state) => ({
//     genero: state.genero
// }))(Genero);