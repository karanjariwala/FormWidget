import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 40vh;
`;

const CenterCard = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default CenterCard;
