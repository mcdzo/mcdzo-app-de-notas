import axios from "axios";

const agregarNota = (nota) => {
  const url = "https://app-de-notas-mcardozo.herokuapp.com/api/guardar-nota";
  return axios.post(url, nota);
};

export default agregarNota;
