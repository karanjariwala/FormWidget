import React, { Component } from 'react';
import CenterCard from '../presentational/CenterCard.jsx';
import QuestionText from '../container/QuestionText.jsx';
import Options from '../container/Options.jsx';
import ActionButton from '../container/ActionButton.jsx';

const SingleQuestionView = () => (
  <CenterCard>
    <QuestionText />
    <Options />
    <ActionButton />
  </CenterCard>
);

export default SingleQuestionView;
