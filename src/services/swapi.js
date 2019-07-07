import ApiService from './api';

const client = new ApiService({});
const swapi = {};

swapi.getPeople = (page = 1) => client.get(`/people?page=${page}`);

swapi.getPerson = person => client.get(`/people?search=${person}`);

swapi.getData = url => client.get(url.replace('https://swapi.co/api', ''));

export default swapi;
