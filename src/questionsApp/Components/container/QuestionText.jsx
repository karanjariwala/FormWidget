import React from 'react';
import { connect } from 'react-redux';
import { questionTextSelector } from './selector';

const QuestionText = ({ text }) => <div>{text}</div>;

const mapStateToProps = state => ({
  text: questionTextSelector(state),
});

export default connect(mapStateToProps)(QuestionText);
