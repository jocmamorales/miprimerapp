

function Usuarios(props) {
  return (
    <div>
      <h3 style ={{backgroundColor:"red"}}>Empleado:</h3>
      <p>Nombre: {props.nombre}</p>
      <p>Edad: {props.edad}</p>
      <p>localidad: {props.localidad}</p>
    </div>
  );
}

export default Usuarios;
