import { useState } from "react";

const NuevaNota = ({ agregarNota }) => {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (titulo !== "" && contenido !== "") {
      const timeElapsed = Date.now();
      const date = new Date(timeElapsed);
      const noteDate = date.toUTCString();

      agregarNota({ titulo, contenido, noteDate });
      setTitulo("");
      setContenido("");
    } else {
      alert("Hay campos obligatorios");
    }
  };

  return (
    <form className="nueva-nota" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Titulo: (*)</label>
        <input
          placeholder="Titulo de la nota"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
        ></input>
      </div>
      <div className="form-control">
        <label>Contenido de la nota: (*)</label>
        <input
          placeholder="Escribí alguna nota"
          onChange={(e) => setContenido(e.target.value)}
          value={contenido}
        ></input>
      </div>
      <button type="submit">Agregar Nota</button>
    </form>
  );
};

export default NuevaNota;
