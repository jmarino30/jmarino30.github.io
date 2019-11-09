import React from 'react';

class ActivityInput extends React.Component {

    renderActivityInformation = (activity) => {
        if (activity >= 1 && activity <= 1.2) {
            return <small className="text-danger"><strong>Sedentary:</strong> Little or no exercise</small>;
        } else if (activity > 1.2 && activity <= 1.375) {
            return <small className="text-danger"><strong>Lightly Active:</strong> Light exercise/sports 1 to 3 days per week</small>;
        } else if (activity > 1.375 && activity <= 1.55) {
            return <small className="text-danger"><strong>Moderately Active:</strong> Moderate exercise/sports 3 to 5 days per week</small>;
        } else if (activity > 1.55 && activity <= 1.725) {
            return <small className="text-danger"><strong>Very Active:</strong> Hard exercise/sports 6 to 7 days per week</small>;
        } else if (activity > 1.725 && activity <= 1.9) {
            return <small className="text-danger"><strong>Extremely Active:</strong> Very hard exercise/sports 6 to 7 days per week &amp; physical job</small>;
        } else {
            return <small className="text-danger"><strong>Recommended value between 1 and 1.9</strong></small>;
        }
    }
    render() {
        return (
            <div className="form-group ">
                <label htmlFor="activity-level">Activity Level: {this.renderActivityInformation(this.props.activity)}</label>
                <input 
                    type="number" 
                    className="form-control" 
                    value={this.props.activity} 
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

export default ActivityInput;

/*
<ul className="small">
<li><strong>1.2</strong> = little or no exercise</li>
<li><strong>1.375</strong> = light exercise 1 to 3 days per week</li>
<li><strong>1.55</strong> = moderate exercise 3 to 5 days per week</li>
<li><strong>1.725</strong> = hard exercise 6 to 7 days per week</li>
<li><strong>1.9</strong> = very hard exercise 6 to 7 days per week &amp; physical job</li>
</ul>
*/