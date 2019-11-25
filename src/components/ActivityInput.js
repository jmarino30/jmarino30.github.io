import React from 'react';
import './style.css';

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
            <div className="form-group">
                <label htmlFor="activity-level">Activity Level: </label>
                        <input 
                            style={{display:"inline", marginBottom:"10px"}}
                            type="number" 
                            className="form-control" 
                            value={this.props.activity} 
                            onChange={this.props.onChange}
                            step="0.1" />
                    <div className="col-sm center-vert">
                    <input style={{float:"left"}}
                        type="range" 
                        orient="vertical" 
                        value={this.props.activity}
                        min="1"
                        max="1.95"
                        step="0.05"
                        onChange={this.props.onChange}
                        />
                        <ul style={{floar:"left"}} className="small center-vert">
                            <li className={this.props.activity > 1.725 && this.props.activity <= 1.99 ? 'selected' : null}><strong>1.9 = Extremely Active</strong>{this.props.activity > 1.725 && this.props.activity <= 1.99 ? ': Very hard exercise 6 to 7 days per week & physical job' : null}</li>
                            <li className={this.props.activity > 1.55 && this.props.activity <= 1.725 ? 'selected' : null}><strong>1.725 = Very Active</strong>{this.props.activity > 1.55 && this.props.activity <= 1.725 ? ': Hard exercise 6 to 7 days per week' : null}</li>
                            <li className={this.props.activity > 1.375 && this.props.activity <= 1.55 ? 'selected' : null}><strong>1.55 = Moderately Active</strong>{this.props.activity > 1.375 && this.props.activity <= 1.55 ? ': Moderate exercise 3 to 5 days per week' : null}</li>
                            <li className={this.props.activity > 1.2 && this.props.activity <= 1.375 ? 'selected' : null}><strong>1.375 = Lightly Active</strong>{this.props.activity > 1.2 && this.props.activity <= 1.375 ? ': Light exercise 1 to 3 days per week ' : null}</li>
                            <li className={this.props.activity <= 1.2 ? 'selected' : null}><strong>1.2 = Sedentary</strong>{this.props.activity <= 1.2 ? ': Little or no exercise' : null}</li>
                        </ul>
                    </div>
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