import axios from 'axios';
import {
  GET_QUESTIONS,
  QUESTIONS_ERROR,
  DELETE_QUESTION
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

// delete questions
export const deleteQuestion = (id) => async dispatch => {
  try {
    await axios.delete(`/api/question/delete/${id}`);

    dispatch({
      type: DELETE_QUESTION,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: QUESTIONS_ERROR,
      payload: { msg: "error" }
    });
  }
};
