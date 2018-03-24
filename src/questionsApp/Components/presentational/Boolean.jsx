import React from 'react';
import { Input, StyledTextInline } from './StyledComponenetsCommon';

const handleChange = (value, props) => e => {
  e.target.value = value;
  props.onChange(e);
};

const Boolean = props => (
  <div>
    <StyledTextInline>YES</StyledTextInline>{' '}
    <Input
      type="radio"
      name="same"
      value="Yes"
      checked={props.value === 'Yes'}
      {...props}
      onChange={handleChange('Yes', props)}
    />
    <StyledTextInline>NO</StyledTextInline>{' '}
    <Input
      type="radio"
      name="same"
      value="No"
      checked={props.value === 'No'}
      {...props}
      onChange={handleChange('No', props)}
    />
  </div>
);

export default Boolean;
