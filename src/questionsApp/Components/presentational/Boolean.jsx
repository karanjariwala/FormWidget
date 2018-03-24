import React from 'react';

const handleChange = (value, props) => e => {
  e.target.value = value;
  props.onChange(e);
};

const Boolean = props => (
  <div>
    YES{' '}
    <input
      type="radio"
      name="same"
      value="Y"
      checked={props.value === 'Y'}
      {...props}
      onChange={handleChange('Y', props)}
    />
    NO{' '}
    <input
      type="radio"
      name="same"
      value="N"
      checked={props.value === 'N'}
      {...props}
      onChange={handleChange('N', props)}
    />
  </div>
);

export default Boolean;
