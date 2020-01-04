import React from 'react'
import PropTypes from 'prop-types';

const AnswerElement = ({name,text,date}) => {
    return (
        <div className="card mb-3">
            <div className="row ">
                <div className="card-header col-3 "><p className="card-text"> {name}</p></div>
                <div className="card-body col-9"><p className="card-text"> {text}</p></div>
            </div>
        </div>
    )
}

AnswerElement.propTypes = {
    name: PropTypes.string.isRequired,
}

export default AnswerElement;
