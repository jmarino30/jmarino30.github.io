import React from 'react';
import './macroSliders.css';

class MacroSliders extends React.Component {
    state = {
        carbsPercentage: 35,
        fatPercentage: 30,
        proteinPercentage: 35
    }
    renderProteinSlider = (protein, proteinPercentage) => {
        let classes = "form-group alert";
        let warning = false;
        if (proteinPercentage < 30 || proteinPercentage > 55) {
            classes = "form-group alert alert-danger";
            warning = true;
        }
        return (
            <div className={classes} >
                <label htmlFor="formControlRange">
                    Protein <strong>{protein ? `${protein}g (${proteinPercentage}%)` : '0g'}
                    </strong>
                    {warning ? <small> *Recommended between 30-55%</small> : ''}
            </label>
            <input 
                min="0" 
                max="100"
                value={proteinPercentage}
                onChange={this.handleProteinSlider} 
                type="range" 
                className="form-control-range"
            />
            </div>
        );
    }
    renderCarbsSlider = (carbs, carbsPercentage) => {
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
                    {warning ? <small> *Recommended between 30-55%</small> : ''}
            </label>
            <input 
                min="0" 
                max="100"
                value={carbsPercentage}
                onChange={this.handleCarbsSlider} 
                type="range" 
                className="form-control-range"
            />
            </div>
        );
    }
    renderFatSlider = (fat, fatPercentage) => {
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
                    {warning ? <small> *Recommended between 10-35%</small> : ''}
            </label>
            <input 
                min="0" 
                max="100"
                value={fatPercentage}
                onChange={this.handleFatSlider} 
                type="range" 
                className="form-control-range"
            />
            </div>
        );
    }
    handleProteinSlider = event => {
        let percentLeft = 100;
        const proteinPercentage = parseInt(event.target.value);
        percentLeft -= proteinPercentage;
        const carbsPercentage = parseInt(percentLeft * .65);
        const fatPercentage = parseInt(percentLeft * .35);
        this.setState({ proteinPercentage, carbsPercentage, fatPercentage });
    }
    handleCarbsSlider = event => {
        let percentLeft = 100;
        const carbsPercentage = parseInt(event.target.value);
        percentLeft -= carbsPercentage;
        const proteinPercentage = parseInt(percentLeft * .65);
        const fatPercentage = parseInt(percentLeft * .35);
        this.setState({ proteinPercentage, carbsPercentage, fatPercentage });
    }
    handleFatSlider = event => {
        let percentLeft = 100;
        const fatPercentage = parseInt(event.target.value);
        percentLeft -= fatPercentage;
        const proteinPercentage = parseInt(percentLeft * .55);
        const carbsPercentage = parseInt(percentLeft * .45);
        this.setState({ proteinPercentage, carbsPercentage, fatPercentage });
    }
    render() {
        const fat = this.props.tdee * (this.state.fatPercentage/100) / 9;
        const carbs = this.props.tdee * (this.state.carbsPercentage/100) / 4;
        const protein = this.props.tdee * (this.state.proteinPercentage/100) / 4;
        return (
            <div>
                {this.renderFatSlider(parseInt(fat), this.state.fatPercentage)}
                {this.renderCarbsSlider(parseInt(carbs), this.state.carbsPercentage)}
                {this.renderProteinSlider(parseInt(protein), this.state.proteinPercentage)}
            </div>
        );
    }
}

export default MacroSliders;