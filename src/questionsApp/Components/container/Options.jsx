import React from 'react';
import { connect } from 'react-redux';
import { questionSelector } from './selector';
import { mapTypeToComponent } from '../../Constants/constants.js';
import { QuestionActions } from '../../Actions/questionsActions';
import TextInput from '../presentational/TextInput';

const handleChange = (id, changeReply) => event => {
  changeReply(id, event.target.value);
};

const Options = ({ id, type, reply, changeReply }) => {
  let Componenet = TextInput;

  if (type && type !== 'string') {
    Componenet = mapTypeToComponent[type];
  }

  return <Componenet onChange={handleChange(id, changeReply)} value={reply} />;
};

const mapStateToProps = state => {
  const { id, type, reply } = questionSelector(state);
  return {
    id,
    type,
    reply,
  };
};

const mapDispatchToProps = dispatch => ({
  changeReply: (id, value) => dispatch(QuestionActions.changeReply(id, value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Options);
