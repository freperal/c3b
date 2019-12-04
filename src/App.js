import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className= "app-title">Control de Carga de Combustible Bolívar</h1>
        
     
 
    <form>
  <label>
    Cedula de Identidad:
    <input type="int" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

<form>
  <label>
    Placa Vehículo:
    <input type="int" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>


<form>
  <label>
    Estación de Servicio:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>




        
        
      </header>
    </div>
  );
}

export default App;
