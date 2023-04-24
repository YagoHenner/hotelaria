import axios from 'axios';

function setupAPIClient(ctx = undefined) {
  const api = axios.create({
    baseURL: `${import.meta.env.API}`,
  });
  console.log(api)
  return api;
}
const api = setupAPIClient();

export default api;
