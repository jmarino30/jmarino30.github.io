import React from 'react';
import WeightInput from './WeightInput';
import BodyFatInput from './BodyFatInput';
import ActivityInput from './ActivityInput';
import BodyResults from './BodyResults';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weight:'',
            bodyFat:'',
            activity: 1
        }
    }
    handleWeightInput = event => {
        this.setState({ weight: event.target.value });
    }
    handleBodyFatInput = event => {
        this.setState({ bodyFat: event.target.value });
    }
    handleActivityInput = event => {
        this.setState({ activity: event.target.value });
    }
    render() {
        const {weight, bodyFat, activity} = this.state;
        return (
            <div className="container" style={{maxWidth:"800px"}}>
                <h1 style={{textAlign:"center", margin:"20px 0 30px 0"}}>Calorie Calculator</h1>
                <div className="row">
                    <div className="col-sm-6">
                        <WeightInput value={weight} onChange={this.handleWeightInput} />
                        <BodyFatInput value={bodyFat} onChange={this.handleBodyFatInput} />
                    </div>
                    <div className="col-sm-6 center-vert">
                        <ActivityInput activity={activity} onChange={this.handleActivityInput} />
                    </div>
                </div>
                <BodyResults weight={weight} bodyFat={bodyFat} activity={activity} />
            </div>
        );
    }
}

export default App;

//fix number inputs mobile keyboards
//fix carbs slider from moving on mobile

// fix entire layout, make inputs much smaller, use bootstrap grid better