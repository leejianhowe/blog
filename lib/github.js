import { API_GITHUB } from "./api";
export async function getGithubRepos() {
  const result = await API_GITHUB()
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
  return result  
}
