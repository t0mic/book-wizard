import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid, TextField, FormControlLabel, Checkbox } from "@material-ui/core";
import ControlButtons from "../ControlButtons/ControlButtons";

export default function CreateSubgenre(props) {
  const {
    step,
    nextStep,
    prevStep,
    subgenreTitle,
    handleSubgenreTitle,
    subgenreDescription,
    handleDescription
  } = props;
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <TextField
            fullWidth
            id="subgenreName"
            label="Subgenre name"
            value={subgenreTitle}
            type="text"
            name="subgenreName"
            margin="normal"
            variant="outlined"
            onChange={e => {
              handleSubgenreTitle(e.target.value);
            }}
          />
        </Grid>
        <Grid item md={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={subgenreDescription}
                value={subgenreDescription}
                onChange={handleDescription}
              />
            }
            label="Description is required for this subgenre"
          />
        </Grid>
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

CreateSubgenre.propTypes = {
  step: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  subgenreTitle: PropTypes.string.isRequired,
  handleSubgenreTitle: PropTypes.func.isRequired,
  subgenreDescription: PropTypes.bool.isRequired,
  handleDescription: PropTypes.func.isRequired
};
