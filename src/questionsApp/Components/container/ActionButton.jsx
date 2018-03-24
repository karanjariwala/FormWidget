import React from 'react';
import { connect } from 'react-redux';
import { isButtonDisabled } from './selector';
import { QuestionActions } from '../../Actions/questionsActions';

const ActionButton = ({ disabled, nextQuestion }) => {
  return (
    <button disabled={disabled} onClick={nextQuestion}>
      Next
    </button>
  );
};

const mapStateToProps = state => {
  return { disabled: isButtonDisabled(state) };
};

const mapDispatchToProps = dispatch => ({
  nextQuestion: () => {
    dispatch(QuestionActions.nextQuestion());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionButton);
