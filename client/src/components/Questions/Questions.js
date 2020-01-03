import React ,{ useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuestions } from '../../actions/question';


import QuestionElement from "../Layout/QuestionElement"

const Questions = ({ getQuestions, question: { questions, loading },auth}) => {
    useEffect(() => {
        getQuestions();
      }, [getQuestions]);

    return !loading && (
        <div>
        {questions.map(question => (
          <QuestionElement name={question.name} date={question.date} text={question.text} trash={ !auth.loading && auth.isAuthenticated && question.user===auth.user._id} />
        ))}
        </div>
    )
}

Questions.propTypes = {
    getQuestions: PropTypes.func.isRequired,
    question: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    question: state.question,
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { getQuestions }
  )(Questions);