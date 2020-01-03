import React from 'react';
import Moment from 'react-moment';

const QuestionElement = (props) => {
    const {name,date,text,trash} = props
    return (
        <div className="card mb-3">
        <div className="card-header">
            <h5>{name}
                {trash && (<i
                className="fa fa-trash"
                style={{ cursor: 'pointer', float: 'right', color: 'red' }}/>)}
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
export default QuestionElement;