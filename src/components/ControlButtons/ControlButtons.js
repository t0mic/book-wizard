import React from "react";
import PropTypes from "prop-types";
import { Button, Grid } from "@material-ui/core";
import arrowBack from "../../images/arrowBack.png";

import styles from "./ControlButtons.css";

export default function ControlButtons(props) {
  const { prevStep, nextStep, step, disabled } = props;
  return (
    <Grid item md={12} xs={12}>
      <div className={styles.buttonWrap}>
        <Button
          className={styles.buttonBack}
          onClick={prevStep}
          variant="contained"
          disabled={step === 1}
        >
          <img src={arrowBack} alt={"arrow back"} />
          Back
        </Button>
        <Button
          onClick={nextStep}
          variant="contained"
          color="primary"
          disabled={disabled}
        >
          {step !== 4 ? "Next" : "Add"}
        </Button>
      </div>
    </Grid>
  );
}

ControlButtons.propTypes = {
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired
};
