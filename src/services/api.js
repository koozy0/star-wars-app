import axios from 'axios';

const API_ROOT = process.env.ROOT_URL || 'https://swapi.co/api/';
const TIMEOUT = 60000;
const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class ApiService {
  constructor({ baseURL = API_ROOT, timeout = TIMEOUT, headers = HEADERS }) {
    const client = axios.create({
      baseURL,
      timeout,
      headers,
    });

    client.interceptors.response.use(this.handleSuccess, this.handleError);
    this.client = client;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(path) {
    return this.client.get(path).then(res => res.data);
  }
}

export default ApiService;
