import axios from 'axios';
import { GET_POPULATION, GET_ERROR } from './types';

export const getPopulation = (country, sex, age) => dispatch => {
  axios.get(`http://api.population.io:80/1.0/mortality-distribution/${country}/${sex}/${age}/today/`)
    .then(res => {
      dispatch({
        type: GET_POPULATION,
        payload: res.data.mortality_distribution
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err.response
      })
    })
};