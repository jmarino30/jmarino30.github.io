import React from 'react';
import TdeeModifier from './TdeeModifier';
import MacroSliders from './MacroSliders';

class BodyResults extends React.Component {
    state = {
        type: 'surplus',
        modifier: ''
    }
    handleSelect = event => {
        if (event.target.value === 'surplus') {
            this.setState({ type: 'surplus' });
        } else if (event.target.value === 'deficit') {
            this.setState({ type: 'deficit' })
        }
    }
    handleInput = event => {
        const modifier = event.target.value / 100;
        this.setState({ modifier });
    }
    render() {
        let lbm, bmr, tdee = '';
        if (this.props.weight && this.props.bodyFat) {
            // Calculate lean body mass
            const weightLBS = this.props.weight;
            const bodyFatDecimal = this.props.bodyFat / 100;
            lbm = weightLBS - ( weightLBS * bodyFatDecimal);
            // Calculate BMR
            const leanBodyMassKG = lbm / 2.2046;
            bmr = 370 + 21.6 * leanBodyMassKG;
            // Calculate TDEE
            // If activity modifier exists
            if (this.props.activity) {
                tdee = bmr * this.props.activity;
            } else {
                tdee = bmr;
            }
            // If tdee modifier exists
            if (this.state.type === 'surplus') {
                tdee = tdee + (tdee * this.state.modifier);
            } else if (this.state.type === 'deficit') {
                tdee = tdee - (tdee * this.state.modifier);
            }
        }

        return (
            <div>
            <div className="row">
                <div className="col-lg">
            <TdeeModifier tdee={tdee} value={this.state.type} onSelect={this.handleSelect} onInput={this.handleInput} />
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                LBM: <strong>{lbm ? `${parseInt(lbm)} lbs` : ''}</strong>
                </li>
                <li className="list-group-item">
                BMR: <strong>{bmr ? `${parseInt(bmr)} cals` : ''}</strong>
                </li>
                <li className="list-group-item">
                TDEE: <strong>{tdee ? `${parseInt(tdee)} cals` : ''}</strong>
                </li>
            </ul>
            </div>
            <div className="col-lg">
            <MacroSliders tdee={tdee} />
            </div>
            </div>
            </div>
        );
    }
}

export default BodyResults;