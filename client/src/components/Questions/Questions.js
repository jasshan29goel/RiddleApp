import React ,{ useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuestions } from '../../actions/question';


import QuestionElement from "../Layout/QuestionElement"
import QuestionForm from "../Layout/QuestionForm"

const Questions = ({ getQuestions, question: { questions, loading },auth}) => {
    useEffect(() => {
        getQuestions();
      }, [getQuestions]);

    return !loading && (
        <div>
         <QuestionForm/> 
        {questions.map(question => (
          <QuestionElement name={question.name} date={question.date} text={question.text} trash={ !auth.loading && auth.isAuthenticated && question.user===auth.user._id} id={question._id} len={question.answers.length}/>
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