import axios from 'axios';

const api = setupAPIClient();

export function setupAPIClient(ctx = undefined) {
  const api = axios.create({
    baseURL: `${import.meta.env.API}`,
  });
  return api;
}

export default api;
