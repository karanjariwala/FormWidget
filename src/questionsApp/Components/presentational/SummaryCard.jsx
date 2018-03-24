import React from 'react';
import styled from 'styled-components';
import { StyledQuestion } from './StyledComponenetsCommon';

const StyledCard = styled.div`
  margin: 0 auto;
  text-align: left;
  width: 50%;
`;

const StyledAnswer = styled.h4`
  font-size: 1em;
  text-align: left;
  color: mediumseagreen;
`;

const SummaryCard = ({ text, reply }) => (
  <StyledCard className="summary-card">
    <StyledQuestion> {`Q: ${text}`}</StyledQuestion>
    <StyledAnswer> {reply}</StyledAnswer>
  </StyledCard>
);

export default SummaryCard;
