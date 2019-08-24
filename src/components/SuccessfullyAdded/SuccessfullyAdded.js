import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";
import checkmark from "../../images/checkmark.png";

import styles from "./SuccessfullyAdded.css";

export default function SuccessfullyAdded(props) {
  const { handleResetState } = props;
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <div className={styles.imageWrap}>
            <img src={checkmark} alt={"checkmark icon"} />
            <p>Book added successfully</p>
          </div>
          <Button
            color="primary"
            className={styles.buttonNew}
            onClick={handleResetState}
            variant="contained"
          >
            Add another book
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
}

SuccessfullyAdded.propTypes = {
  handleResetState: PropTypes.func.isRequired
};
