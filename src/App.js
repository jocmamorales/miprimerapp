import './App.css';
import Usuarios from './Componentes/Usuarios';



function App() {
  return (
    <div className="App">
      <Usuarios nombre="jorge" edad="50"/>
      <Usuarios imagen="" ></Usuarios>
      <Usuarios nombre="Maria" />
      <Usuarios nombre="Alberto" localidad="Moron" edad="25" />

    </div>
  );
}

export default App;
