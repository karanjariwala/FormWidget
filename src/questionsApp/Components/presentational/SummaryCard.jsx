import React from 'react';
import styled from 'styled-components';
import { StyledQuestion } from './StyledComponenetsCommon';
import '../../App.css';

const StyledCard = styled.div`
  margin: 0 auto;
  text-align: left;
  width: 35%;
`;

const StyledAnswer = styled.h4`
  font-size: 1em;
  text-align: left;
  color: mediumseagreen;
`;

const SummaryCard = ({ text, reply }) => (
  <StyledCard className="summary-card">
    <StyledQuestion> {`Q: ${text}`}</StyledQuestion>
    <StyledAnswer> {`A: ${reply}`}</StyledAnswer>
  </StyledCard>
);

export default SummaryCard;
