import { FaTrashAlt } from "react-icons/fa";

const Notas = ({ notas, eliminarNota }) => {
  return (
    <section className="notas">
      {notas.map((nota) => (
        <div className="nota" key={nota._id}>
          <div className="nota-cabecera">
            <h4>{nota.titulo}</h4>
            <FaTrashAlt
              className="nota-borrar"
              onClick={() => eliminarNota(nota)}
            />
          </div>

          <p className="nota-contenido">{nota.contenido}</p>
          <p className="nota-fecha">{nota.noteDate}</p>
        </div>
      ))}
    </section>
  );
};

export default Notas;
