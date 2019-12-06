import React, { useState } from 'react';
import TdeeModifier from './TdeeModifier';
import MacroSliders from './MacroSliders';

const BodyResults = props => {
  const [type, setType] = useState('none');
  const [modifier, setModifier] = useState('');

  const handleSelect = event => {
    setType(event.target.value);
    if (event.target.value === 'none') {
      setModifier('');
    }
  }
  const handleInput = event => {
    setModifier( event.target.value / 100 );
  }

  let lbm, bmr, tdee = '';
  const {weight, bodyFat, activity} = props;
  if (weight && bodyFat) {
    // Calculate lean body mass
      const weightLBS = weight;
      const bodyFatDecimal = bodyFat / 100;
      lbm = weightLBS - ( weightLBS * bodyFatDecimal);
    // Calculate BMR
      const leanBodyMassKG = lbm / 2.2046;
      bmr = 370 + 21.6 * leanBodyMassKG;
    // Calculate TDEE
    // If activity modifier exists
      if (activity) {
          tdee = bmr * activity;
      } else {
          tdee = bmr;
      }
    // If tdee modifier exists
      if (type === 'surplus') {
          tdee = tdee + (tdee * modifier);
      } else if (type === 'deficit') {
          tdee = tdee - (tdee * modifier);
      }
  }
  return (
    <div className="row">
      <div className="col-md-6">
        <TdeeModifier tdee={tdee} value={type} onSelect={handleSelect} onInput={handleInput} />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            LBM: <strong>{lbm ? `${parseInt(lbm)} lbs` : ''}</strong>
          </li>
          <li className="list-group-item">
            BMR: <strong>{bmr ? `${parseInt(bmr)} cals` : ''}</strong>
          </li>
          <li className="list-group-item">
            TDEE: <strong style={{color:"red"}}>{tdee ? `${parseInt(tdee)} cals` : ''}</strong>
          </li>
        </ul>
      </div>
     <div className="col-md-6">
        <MacroSliders tdee={tdee} />
      </div>
    </div>
  );
}

export default BodyResults;