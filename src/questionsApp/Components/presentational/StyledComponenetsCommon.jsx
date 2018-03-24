import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size: x-large;
`;

const StyledQuestion = styled.h3`
  font-size: 1em;
  text-align: left;
  color: tomato;
`;

const StyledTextInline = styled.div`
  color: palevioletred;
  font-weight: bold;
  display: inline;
  margin-left: 5px;
  margin-right: 5px;
`;

export { Input, StyledQuestion, StyledTextInline };
