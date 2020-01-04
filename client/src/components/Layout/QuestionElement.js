import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteQuestion } from '../../actions/question';
import { Link } from 'react-router-dom';

const QuestionElement = (props) => {
    const {deleteQuestion,name,date,text,trash,id,len} = props
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
            <Link to={`/questions/${id}`} className="btn btn-primary btn-sm">View Answers 
            {' '}
            {len > 0 && (
              <span className='answer-count'>{len}</span>
            )}
            </Link>
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
