import React, { useState } from 'react';
import WeightInput from './WeightInput';
import BodyFatInput from './BodyFatInput';
import ActivityInput from './ActivityInput';
import BodyResults from './BodyResults';

const App = () => {
  const [weight, setWeight] = useState('');
  const [bodyFat, setBodyFat] = useState('');
  const [activity, setActivity] = useState(1);

  const handleWeightInput = event => {
    setWeight(event.target.value);
  }
  const handleBodyFatInput = event => {
    setBodyFat(event.target.value);
  }
  const handleActivityInput = event => {
    setActivity(event.target.value);
  }
  return (
    <div className="container" style={{maxWidth:"800px"}}>
      <h1 style={{textAlign:"center", margin:"20px 0 30px 0"}}>Calorie Calculator</h1>
      <div className="row">
        <div className="col-sm-6">
          <WeightInput value={weight} onChange={handleWeightInput} />
          <BodyFatInput value={bodyFat} onChange={handleBodyFatInput} />
        </div>
        <div className="col-sm-6 center-vert">
          <ActivityInput activity={activity} onChange={handleActivityInput} />
        </div>
      </div>
      <BodyResults weight={weight} bodyFat={bodyFat} activity={activity} />
    </div>
  );
}

export default App;
