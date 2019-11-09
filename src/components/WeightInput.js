import React from 'react';

const WeightInput = props => {
    return (
        <div className="form-group col-xs-6">
            <label htmlFor="weight">Weight (lbs):</label>
            <input 
                type="number" 
                className="form-control" 
                value={props.value} 
                onChange={props.onChange} />
        </div>
    );
}

export default WeightInput;