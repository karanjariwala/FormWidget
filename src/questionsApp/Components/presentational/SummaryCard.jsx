import React from 'react';
import styled from 'styled-components';
import { StyledQuestion } from './StyledComponenetsCommon';

const StyledCard = styled.div`
  margin: 10px;
  text-align: left;
`;

const StyledAnswer = styled.h4`
  font-size: 1em;
  text-align: center;
  color: mediumseagreen;
`;

const SummaryCard = ({ text, reply }) => (
  <StyledCard>
    <StyledQuestion> {`Q: ${text}`}</StyledQuestion>
    <StyledAnswer> {reply}</StyledAnswer>
  </StyledCard>
);

export default SummaryCard;
