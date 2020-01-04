import axios from 'axios';
import {
  GET_QUESTIONS,
  QUESTIONS_ERROR,
  DELETE_QUESTION,
  ADD_QUESTION,
  GET_QUESTION,
  ADD_ANSWER
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

// Get question
export const getQuestion = (id) => async dispatch => {
  try {
    const res = await axios.get(`/api/question/${id}`);

    dispatch({
      type: GET_QUESTION,
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

// add questions
export const addQuestion = (formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res =await axios.post(`/api/question/`,formData,config);

    dispatch({
      type: ADD_QUESTION,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: QUESTIONS_ERROR,
      payload: { msg: "error" }
    });
  }
};

// add answer
export const addAnswer = (id,formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res =await axios.post(`/api/question/answer/${id}`,formData,config);

    dispatch({
      type: ADD_ANSWER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: QUESTIONS_ERROR,
      payload: { msg: "error" }
    });
  }
};