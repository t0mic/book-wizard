import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import arrowBack from "../../images/arrowBack.png";

import styles from "./ControlButtons.css";

class CreateSubgenre extends Component {
  render() {
    const { prevStep, nextStep, step, disabled } = this.props;
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
}
export default CreateSubgenre;
