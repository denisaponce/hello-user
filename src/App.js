import React, {useState, useEffect} from 'react';
import './App.css';



function App() {
const [user, setUser] = useState("");
const [bienvenido, setBienvenido] = useState("");

useEffect(() => {
  if (bienvenido){
    alert(`Gracias por tu vista 👧`)
  }
}, [bienvenido]);

  return (
    <div className="container">
       <h1>Hello User App</h1>
       <form className='Formulario' >
       <input type="text" placeholder='Ingresa tu Nombre' value={user} onChange={(e) => setUser(e.target.value)}/>
       <button type='button' onClick={() =>setBienvenido(`¡Bienvenido/a ${user}! 😄`)}>¡Saludame!</button>
       </form>
       <p>{bienvenido ? bienvenido : "Ingresa tu nombre 🧐"}</p>
    </div>
  );
}
export default App;
