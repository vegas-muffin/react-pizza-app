import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET__LOADED',
  payload,
});

// метод для получения и сохранения пицц
export const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get('http://localhost:3001/pizzas').then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

// метод для сохранения пицц
export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
