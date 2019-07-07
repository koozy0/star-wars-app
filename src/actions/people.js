import { FETCH_PEOPLE, FETCH_PERSON, NEXT_PAGE } from './types';
import swapi from '../services/swapi';

export const fetchPeople = page => async dispatch => {
  dispatch({
    type: FETCH_PEOPLE,
    payload: {},
    completed: false,
  });

  const data = await swapi.getPeople(page);

  dispatch({
    type: FETCH_PEOPLE,
    payload: data,
    completed: true,
  });
};

export const nextPage = page => dispatch => {
  dispatch({
    type: NEXT_PAGE,
    payload: page + 1,
  });
};

export const fetchPerson = name => async dispatch => {
  dispatch({
    type: FETCH_PERSON,
    payload: {},
  });

  const data = await swapi.getPerson(name);
  const person = data.results[0];
  const { films, homeworld, species, starships, vehicles } = person;

  const getData = url => swapi.getData(url);
  const getNameFromData = data => data.name;

  const filmData = await Promise.all(films.map(getData));
  const filmTitles = filmData.map(data => data.title);

  const homeworldData = await swapi.getData(homeworld);
  const homeworldName = homeworldData.name;

  const speciesData = await Promise.all(species.map(getData));
  const speciesNames = speciesData.map(getNameFromData);

  const starshipData = await Promise.all(starships.map(getData));
  const starshipNames = starshipData.map(getNameFromData);

  const vehicleData = await Promise.all(vehicles.map(getData));
  const vehicleNames = vehicleData.map(getNameFromData);

  const updatedPerson = {
    ...person,
    homeworld: homeworldName,
    films: filmTitles,
    species: speciesNames,
    starships: starshipNames,
    vehicles: vehicleNames,
  };

  dispatch({
    type: FETCH_PERSON,
    payload: updatedPerson,
  });
};
