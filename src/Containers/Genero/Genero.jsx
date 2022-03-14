
// import React from 'react';
// import { connect } from 'react-redux';


// const Genero = (props) => {

//     const traePelis = async () => {
        
//             try {

//             let resultado = await axios.get("http://localhost:3300/peliculas/:genero");
                
//             setFilms(resultado.data);
           

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