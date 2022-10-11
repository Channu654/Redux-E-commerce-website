import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_SINGLE_DATA_FAILURE,
  GET_SINGLE_DATA_REQUEST,
  GET_SINGLE_DATA_SUCCESS,
} from './ActionType';

const initstate = {
  isLoading: false,
  isError: false,
  data: [],
  currentData: [],
};

export const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    // currentData
    case GET_SINGLE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_SINGLE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        currentData: payload,
      };
    case GET_SINGLE_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return { ...state };
  }
};
