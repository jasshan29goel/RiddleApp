import React ,{Fragment,useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuestion } from '../../actions/question';
import AnswerElement from '../Layout/AnswerElement';
import AnswerForm from '../Layout/AnswerForm';
import Moment from 'react-moment';

const SingleQuestion = ({question : {question , loading},getQuestion,match}) => {
    useEffect(() => {
        getQuestion(match.params.id);
    }, [getQuestion]);
    
    return !loading && question !== null && (
        <Fragment>
        <div className="card mb-3">
        <div className="card-header">
            <h5>{question.name}</h5>
        </div>
        <div className="card-body">
            <p className="card-text">{question.text}</p>
        </div>
        <div className="card-body">
            <p className="card-text text-muted" style={{ float: 'right' }}  > <small> Posted on <Moment parse="YYYY-MM-DD" format="YYYY/MM/DD"> {question.date}
            </Moment> </small></p>
        </div>
    </div>
    <AnswerForm id={match.params.id}/>
    {question.answers.map(answer => (
          <AnswerElement name={answer.name} text={answer.text} date={answer.date} />
        ))}
    </Fragment>
    )
};

SingleQuestion.propTypes = {
    question: PropTypes.object.isRequired,
    getQuestion: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    question: state.question,
});

export default connect(mapStateToProps,{getQuestion})(SingleQuestion);
