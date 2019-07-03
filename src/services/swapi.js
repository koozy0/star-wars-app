import ApiService from './api';

const client = new ApiService({});
const swapi = {};

swapi.getPeople = (page = 1) => client.get(`/people?page=${page}`);

export default swapi;
