const getNotes = () => {
  return fetch("https://app-de-notas-mcardozo.herokuapp.com/api/notas").then(
    (response) => {
      return response.json();
    }
  );
};

export default getNotes;
