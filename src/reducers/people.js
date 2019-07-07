import { FETCH_PEOPLE, NEXT_PAGE, FETCH_PERSON } from './../actions/types';

const initialState = {
  count: 0,
  loading: false,
  page: 1,
  people: [],
  person: {},
};

const people = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        count: action.payload.count || state.count,
        people: [...state.people, ...(action.payload.results || [])],
        loading: !action.completed,
      };

    case NEXT_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case FETCH_PERSON:
      return {
        ...state,
        person: action.payload,
      };

    default:
      return state;
  }
};

export default people;
