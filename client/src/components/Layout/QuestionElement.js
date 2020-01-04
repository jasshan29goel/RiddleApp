import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteQuestion } from '../../actions/question';

const QuestionElement = (props) => {
    const {deleteQuestion,name,date,text,trash,id} = props
    return (
        <div className="card mb-3">
        <div className="card-header">
            <h5>{name}
                {trash && (
                <button className="btn btn-light btn-lg" onClick={e=>deleteQuestion(id)} style={{ cursor: 'pointer', float: 'right', color: 'red' }}>
                <i
                className="fa fa-trash"
                />
                </button>
                )}
            </h5>
        </div>
        <div className="card-body">
            <p className="card-text">{text}</p>
        </div>
        <div className="card-body">
            <a href="/questions" className="btn btn-primary btn-sm">View Answers</a>
            <p className="card-text text-muted" style={{ float: 'right' }}  > <small> Posted on <Moment parse="YYYY-MM-DD" format="YYYY/MM/DD"> {date}
            </Moment> </small></p>
        </div>
    </div>
    )
};

QuestionElement.propTypes = {
    deleteQuestion: PropTypes.func.isRequired
  };
  
  
  export default connect(
    null,
    { deleteQuestion }
  )(QuestionElement);
