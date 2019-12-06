import React from 'react';

const TdeeModifier = props => {
  return (
    <div className="row">
      <div className="col-7">
        <div className="input-group" style={{marginBottom:'20px'}}>
          <select style={{marginRight:'10px', cursor:'pointer', width:"100%"}} value={props.value} onChange={props.onSelect} className="custom-select" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <option className="dropdown-item" value="none">No Preset (Maintaining)</option>
            <option className="dropdown-item" value="surplus">Surplus (Bulking)</option>
            <option className="dropdown-item" value="deficit">Deficit (Cutting)</option>
          </select>
        </div>
      </div>
      {props.value === 'none' ? null : 
        <div className="col">
          <div className="input-group" style={{marginBottom:'20px'}}>
            <div className="input-group-prepend">
              <span 
                style={{fontFamily:"monospace"}} 
                className={props.value === 'surplus' ? "input-group-text rounded-left surplus" 
                  : "input-group-text rounded-left deficit"}>
                {props.value === 'none' ? '' : props.value === 'surplus' ? '+' : '-'}
              </span>
              </div>
              <input 
                style={{textAlign:'center'}} onChange={props.onInput} 
                type="number" inputMode="numeric" pattern="[0-9]*" 
                className={props.value === 'surplus' ? "form-control surplus" : "form-control deficit"}
                aria-label="Surplus Deficit Amount" />
              <div className="input-group-append">
                <span 
                  className={props.value === 'surplus' ? "input-group-text surplus" : "input-group-text deficit"}>
                    %
                </span>
              </div>
            </div>
        </div>
      }
    </div>
  );
}

export default TdeeModifier;