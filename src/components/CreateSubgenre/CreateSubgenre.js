import React, {Component, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ControlButtons from '../ControlButtons/ControlButtons';

class CreateSubgenre extends Component {

  render () {
    const {step, nextStep, prevStep, selectedGenreId, subgenreTitle, handleSubgenreTitle, subgenreDescription, handleDescription} = this.props;
    return (
      <Fragment>
        <Grid container spacing={3}>
          <Grid>
            <TextField
              id="subgenreName"
              label="Subgenre name"
              // className={classes.textField}
              value={subgenreTitle}
              type="text"
              name="subgenreName"
              margin="normal"
              variant="outlined"
              onChange={(e) => {handleSubgenreTitle(e.target.value)}}
            />
          </Grid>
          <FormControlLabel control={<Checkbox value={subgenreDescription} onChange={handleDescription} />} label="Description is required for this subgenre" />
        </Grid>
        <ControlButtons 
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
          disabled={!subgenreTitle}
        />
      </Fragment>
    );
  }
}
export default CreateSubgenre;