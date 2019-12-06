import React from 'react';

const BodyFatInput = props => {
  return (
    <div className="form-group">
      <label htmlFor="body-fat">Body Fat Percentage (%):</label>
      <input 
          type="number" inputMode="numeric" pattern="[0-9]*"
          className="form-control" 
          value={props.value} 
          onChange={props.onChange} />
    </div>
  );
}

export default BodyFatInput;