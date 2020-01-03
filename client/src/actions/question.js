import axios from 'axios';
import {
  GET_QUESTIONS,
  QUESTIONS_ERROR,
} from './types';

// Get questions
export const getQuestions = () => async dispatch => {
  try {
    const res = await axios.get('/api/question');

    dispatch({
      type: GET_QUESTIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: QUESTIONS_ERROR,
      payload: { msg: "error" }
    });
  }
};

