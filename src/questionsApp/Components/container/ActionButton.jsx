import React from 'react';
import { connect } from 'react-redux';
import { isButtonDisabled } from './selector';
import { QuestionActions } from '../../Actions/questionsActions';
import styled from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  margin: 10px auto !important;
  text-align: center;
  ${props =>
    props.disabled &&
    `border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;`};
`;

const ActionButton = ({ disabled, nextQuestion }) => {
  return (
    <Button disabled={disabled} onClick={nextQuestion}>
      Next
    </Button>
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
