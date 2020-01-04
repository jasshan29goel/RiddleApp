import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addQuestion } from '../../actions/question';

const QuestionForm = ({ addQuestion }) => {
  const [text, setText] = useState('');

  return (
 <div class="form-group ">
  <form  onSubmit={e => {
          e.preventDefault();
          addQuestion({ text });
          setText('');
        }}
      >
    <textarea class="form-control"  rows="3" placeholder="Ask a Question" value={text} onChange={e => setText(e.target.value)} required></textarea>
    <input  type='submit' class="btn btn-success mt-2 pl-3 pr-3" value='Ask' />
  </form>

</div>
  );
};

QuestionForm.propTypes = {
  addQuestion: PropTypes.func.isRequired
};

export default connect(
  null,
  { addQuestion }
)(QuestionForm);