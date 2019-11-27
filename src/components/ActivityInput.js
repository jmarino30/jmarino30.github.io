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
                    type="number" 
                    className="form-control" 
                    value={this.props.activity} 
                    onChange={this.props.onChange}
                    step="0.1" />
                <div style={{margin:"25px 0"}} className="col-sm center-vert">
                    <input style={{float:"left"}}
                        type="range" 
                        orient="vertical" 
                        value={this.props.activity}
                        min="1"
                        max="1.95"
                        step="0.025"
                        onChange={this.props.onChange}
                        />
                    <ul className="small center-vert">
                        <li className={this.props.activity > 1.75 && this.props.activity <= 1.99 ? 'selected' : null}>
                            <strong>1.9 = Extremely Active<br /></strong>
                            {this.props.activity > 1.75 && this.props.activity <= 1.99 ? '10+ hours of exercise or sports per week' : null}
                        </li>
                        <li className={this.props.activity > 1.55 && this.props.activity <= 1.75 ? 'selected' : null}>
                            <strong>1.7 = Very Active<br /></strong>
                            {this.props.activity > 1.55 && this.props.activity <= 1.75 ? '7 to 9 hours of exercise or sports per week' : null}
                        </li>
                        <li className={this.props.activity > 1.35 && this.props.activity <= 1.55 ? 'selected' : null}>
                            <strong>1.45 = Moderately Active<br /></strong>
                            {this.props.activity > 1.35 && this.props.activity <= 1.55 ? '4 to 6 hours of exercise or sports per week' : null}
                        </li>
                        <li className={this.props.activity > 1.15 && this.props.activity <= 1.35 ? 'selected' : null}>
                            <strong>1.3 = Lightly Active<br /></strong>{this.props.activity > 1.15 && this.props.activity <= 1.35 ? '1 to 3 hours of exercise or sports per week' : null}
                        </li>
                        <li className={this.props.activity <= 1.15 ? 'selected' : null}>
                            <strong>1.15 = Sedentary<br /></strong>
                            {this.props.activity <= 1.15 ? 'Little to no exercise or sports per week' : null}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ActivityInput;
