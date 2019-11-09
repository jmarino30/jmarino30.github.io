import React from 'react';

const BodyFatInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="body-fat">Body Fat Percentage:</label>
            <input 
                type="number" 
                className="form-control" 
                value={props.value} 
                onChange={props.onChange} />
        </div>
    );
}

export default BodyFatInput;