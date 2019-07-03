import { FETCH_PEOPLE, FETCH_PERSON } from './../actions/types';

const initialState = {
  count: 0,
  people: [],
  person: {}
};

const people = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        count: action.payload.count,
        people: action.payload.results
      };

    case FETCH_PERSON:
      return {
        ...state,
        person: action.payload
      };

    default:
      return state;
  }
};

export default people;
