import { GET_POPULATION } from '../Actions/types';

const initialState = {
  population: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POPULATION:
      return {
        ...state,
        population: action.payload
      };
    default:
      return state;
  }
}