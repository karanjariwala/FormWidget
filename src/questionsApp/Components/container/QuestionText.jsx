import React from 'react';
import { connect } from 'react-redux';
import { questionTextSelector } from './selector';
import styled from 'styled-components';

const StyledQuestionText = styled.h1`
  font-size: 2em;
  text-align: center;
  color: tomato;
`;

const QuestionText = ({ text }) => (
  <StyledQuestionText>{text}</StyledQuestionText>
);

const mapStateToProps = state => ({
  text: questionTextSelector(state),
});

export default connect(mapStateToProps)(QuestionText);
