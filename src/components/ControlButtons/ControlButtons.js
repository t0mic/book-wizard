import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class CreateSubgenre extends Component {
  render () {
    const {prevStep, nextStep, step, disabled} = this.props;
    return (
      <div>
        <Button 
          onClick={prevStep}
          variant="contained"
          disabled={step === 1}>
          Back
        </Button>
        <Button 
          onClick={() => {nextStep()}}
          variant="contained"
          color="primary"
          disabled={disabled}>
          Next
        </Button>
        </div>
    );
  }
}
export default CreateSubgenre;