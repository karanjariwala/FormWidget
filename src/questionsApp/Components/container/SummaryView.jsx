import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { getAnsweredQuestions } from './selector';
import SummaryCard from '../presentational/SummaryCard';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const SummaryView = ({ answeredQuestions }) => {
  let toRender = <span />;
  if (Array.isArray(answeredQuestions)) {
    toRender = (
      <div>
        <Title>Claim Submission</Title>
        {answeredQuestions.map(question => {
          return <SummaryCard key={question.id} {...question} />;
        })}
      </div>
    );
  }

  return toRender;
};

const mapStateToProps = state => ({
  answeredQuestions: getAnsweredQuestions(state),
});

export default connect(mapStateToProps)(SummaryView);
