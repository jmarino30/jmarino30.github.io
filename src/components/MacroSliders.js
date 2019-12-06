import React, { useState, useEffect } from 'react';
import './macroSliders.css';

const MacroSliders = props => {
  const [carbsPercentage, setCarbsPercentage] = useState(35);
  const [fatPercentage, setFatPercentage] = useState(30);
  const [proteinPercentage, setProteinPercentage] = useState(35); 
  const [width, setWidth] = useState(0);

  useEffect( () => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', setWidth);
  }, [width]);
    
  const renderProteinSlider = (protein, proteinPercentage) => {
    let classes = "form-group alert";
    let warning = false;
    if (proteinPercentage < 30 || proteinPercentage > 55) {
      classes = "form-group alert alert-danger";
      warning = true;
    }
    return (
      <div className={classes} >
        <label htmlFor="formControlRange">
          Protein <strong>{protein ? `${protein}g (${proteinPercentage}%)` : '0g'}</strong>
          {warning ? <small>{width > 400 ? ' *Recommended' : ' *Rec.'} 30-55%</small> : ''}
        </label>
        <input 
          min="0" 
          max="100"
          value={proteinPercentage}
          onChange={handleProteinSlider} 
          type="range" 
          className="form-control-range"
        />
      </div>
    );
  }
  const renderCarbsSlider = (carbs, carbsPercentage) => {
    let classes = "form-group alert";
    let warning = false;
    if (carbsPercentage < 30 || carbsPercentage > 55) {
        classes = "alert alert-danger";
        warning = true;
    }
    return (
      <div className={classes}>
        <label htmlFor="formControlRange">
          Carbs <strong>{carbs ? `${carbs}g (${carbsPercentage}%)` : '0g'}</strong>
          {warning ? <small>{width > 400 ? ' *Recommended' : ' *Rec.'} 30-55%</small> : ''}
        </label>
        <input 
          min="0" 
          max="100"
          value={carbsPercentage}
          onChange={handleCarbsSlider} 
          type="range" 
          className="form-control-range"
        />
      </div>
    );
  }
  const renderFatSlider = (fat, fatPercentage) => {
    let classes = "form-group alert";
    let warning = false;
    if (fatPercentage < 10 || fatPercentage > 35) {
        classes = "alert alert-danger";
        warning = true;
    }
    return (
      <div className={classes}>
        <label  htmlFor="formControlRange">
          Fat <strong>{fat ? `${fat}g (${fatPercentage}%)` : '0g'}</strong>
          {warning ? <small>{width > 400 ? ' *Recommended' : ' *Rec.'} 10-35%</small> : ''}
        </label>
        <input 
          min="0" 
          max="100"
          value={fatPercentage}
          onChange={handleFatSlider} 
          type="range" 
          className="form-control-range"
        />
      </div>
    );
  }
  const handleProteinSlider = event => {
    let percentLeft = 100;
    const proteinPercentage = parseInt(event.target.value);
    percentLeft -= proteinPercentage;
    const carbsPercentage = parseInt(percentLeft * .65);
    const fatPercentage = parseInt(percentLeft * .35);
    setProteinPercentage(proteinPercentage);
    setCarbsPercentage(carbsPercentage);
    setFatPercentage(fatPercentage);
    }
  const handleCarbsSlider = event => {
    let percentLeft = 100;
    const carbsPercentage = parseInt(event.target.value);
    percentLeft -= carbsPercentage;
    const proteinPercentage = parseInt(percentLeft * .65);
    const fatPercentage = parseInt(percentLeft * .35);
    setProteinPercentage(proteinPercentage);
    setCarbsPercentage(carbsPercentage);
    setFatPercentage(fatPercentage);
    }
  const handleFatSlider = event => {
    let percentLeft = 100;
    const fatPercentage = parseInt(event.target.value);
    percentLeft -= fatPercentage;
    const proteinPercentage = parseInt(percentLeft * .55);
    const carbsPercentage = parseInt(percentLeft * .45);
    setProteinPercentage(proteinPercentage);
    setCarbsPercentage(carbsPercentage);
    setFatPercentage(fatPercentage);
    }
  const fat = props.tdee * (fatPercentage/100) / 9;
  const carbs = props.tdee * (carbsPercentage/100) / 4;
  const protein = props.tdee * (proteinPercentage/100) / 4;
  return (
    <div>
      {renderFatSlider(parseInt(fat), fatPercentage)}
      {renderCarbsSlider(parseInt(carbs), carbsPercentage)}
      {renderProteinSlider(parseInt(protein), proteinPercentage)}
    </div>
  );
}

export default MacroSliders;