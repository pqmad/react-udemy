/*import { Fragment } from "react"
//rafc
export const FirstApp = () => {
  return (
    <Fragment>
      <h1>FirstApp</h1>
      <p>Ariana</p>
    </Fragment>

  )
}
*/

//const nombre='Arianaaaa';
import PropTypes from "prop-types";


const nombre={
  n1:"ariana",
  edad:22
};
const getsaludo = () => {return "Holis"};


export const FirstApp = ({titulo, subtitulo}) => {
  //console.log(props);
 
  return (
    <>
      <h1>FirstApp</h1>
      <h1 data-testid="test-titulo">{titulo}</h1>
      <h3>{subtitulo}</h3>
      <h3>{subtitulo}</h3>
      <h2>{getsaludo()}</h2>
      <h3>{nombre.edad}</h3>
      <h3>{JSON.stringify(nombre)}</h3>
    </>

  )
}

FirstApp.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  //titulo: 'No hay titulo',
  subtitulo: 0,
  name:'Madeline'
}