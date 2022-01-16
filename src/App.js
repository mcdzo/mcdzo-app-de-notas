import "./App.css";
import Header from "./components/Header";
import Notas from "./components/Notas";
import { useState, useEffect } from "react";
import NuevaNota from "./components/NuevaNota";
import Footer from "./components/Footer";
import getNotes from "./services/getNotes";
import borrarNota from "./services/borrarNota";
import nuevaNota from "./services/nuevaNota";

function App() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    getNotes().then((res) => {
      const data = res.notas;
      setNotas(data);
    });
  }, [notas]);

  const agregarNota = (nota) => {
    nuevaNota(nota);
  };

  const eliminarNota = (nota) => {
    borrarNota(nota);
  };

  return (
    <div className="App">
      <Header></Header>
      <NuevaNota agregarNota={agregarNota}></NuevaNota>
      <Notas notas={notas} eliminarNota={eliminarNota}></Notas>
      <Footer></Footer>
    </div>
  );
}

export default App;

/*const agregarNota = (nota) => {
    const id = Math.floor(Math.random() * (10000 - 1)) + 1;
    const nuevaNota = { ...nota, id };
    console.log(nuevaNota);
    setNotas([...notas, nuevaNota]);
  }; 
   const eliminarNota = (nota) => {
    console.log(nota);
    //setNotas(notas.filter((nota) => nota._id !== id));
    //estaba filtrando las notas, pero me faltaba actualizar el estado (setNotas(...))

    borrarNota(nota);
  };

  const eliminarNota = (nota) => {
    setNotas(notas.filter((nota) => nota._id !== id));
    //estaba filtrando las notas, pero me faltaba actualizar el estado (setNotas(...))

  
  };

  */
