import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAnswer } from '../../actions/question';

const AnswerForm = ({ addAnswer,id }) => {
  const [text, setText] = useState('');

  return (
 <div class="form-group ">
  <form  
  onSubmit={e => {
          e.preventDefault();
          addAnswer(id,{ text });
          setText('');
        }}
      >
    <textarea class="form-control"  rows="3" placeholder="Answer the Question"
     value={text} onChange={e => setText(e.target.value)} required
     ></textarea>
    <input  type='submit' class="btn btn-success mt-2 mb-2 pl-3 pr-3" value='Answer' />
  </form>

</div>
  );
};

AnswerForm.propTypes = {
  addAnswer: PropTypes.func.isRequired
};

export default connect(
  null,
  { addAnswer }
)(AnswerForm);