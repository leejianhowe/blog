export const API = (param)=> fetch(`${process.env.URL}${param}`, {
  method: "GET",
});

export const API_GITHUB = () => fetch(`${process.env.URL_GITHUB}`,{
  method:"GET"
});