export const API = (param)=> fetch(`${process.env.URL}${param}`, {
  method: "GET",
});
