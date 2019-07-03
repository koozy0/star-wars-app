import { FETCH_PEOPLE, FETCH_PERSON } from './types';
import swapi from '../services/swapi';

export const fetchPeople = () => dispatch => {
  swapi.getPeople(1).then(people => {
    dispatch({
      type: FETCH_PEOPLE,
      payload: people
    });
  });
};

export const fetchPerson = () => dispatch => {
  dispatch({
    type: FETCH_PERSON,
    payload: { message: 'test' }
  });
};
