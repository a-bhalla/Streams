import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from './types';

const baseUrl = 'http://localhost:3001';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async dispatch => {
  const response = await fetch(`${baseUrl}/streams`, {
    method: 'POST'
  })
  const json = await response.json();
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });
};
