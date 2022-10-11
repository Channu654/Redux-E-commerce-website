import axios from 'axios';
import * as types from './ActionType';

const getData = (payload) => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });
  return axios
    .get('https://redux-mini-project.herokuapp.com/data')
    .then((res) =>
      dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_DATA_FAILURE, payload: err }));
};
// singleData
export const SingleData = (id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLE_DATA_REQUEST });
  return axios
    .get(`https://redux-mini-project.herokuapp.com/data/${id}`)
    .then((res) =>
      dispatch({ type: types.GET_SINGLE_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_SINGLE_DATA_FAILURE, payload: err })
    );
};

export { getData };
