import { GET_ERROR } from '../Actions/types';

const initialState = {
  population: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERROR:
      return {
        ...state,
        population: action.payload
      };
    default:
      return state;
  }
}