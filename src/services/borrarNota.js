import axios from "axios";

const borrarNota = (nota) => {
  const id = nota._id;
  const url = `https://app-de-notas-mcardozo.herokuapp.com/api/borrar-nota/${id}`;
  return axios.delete(url, id);
};

export default borrarNota;
