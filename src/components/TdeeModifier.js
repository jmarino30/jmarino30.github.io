import React from 'react';

const TdeeModifier = props => {
    return (
        <div className="input-group" style={{marginBottom:'20px'}}>
            <div className="input-group-prepend">
                <select style={{marginRight:'10px'}} value={props.value} onChange={props.onSelect} className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <option className="dropdown-item" value="surplus">Surplus (Bulking)</option>
                    <option className="dropdown-item" value="deficit">Deficit (Cutting)</option>
                </select>
                <span className="input-group-text rounded-left">{props.value === 'surplus' ? '+' : '-'}</span>
            </div>
            <input onChange={props.onInput} type="number" inputMode="numeric" pattern="[0-9]*" className="form-control" aria-label="Surplus Deficit Amount" />
            <div className="input-group-append">
                <span className="input-group-text">%</span>
            </div>
        </div>
    );
}

export default TdeeModifier;