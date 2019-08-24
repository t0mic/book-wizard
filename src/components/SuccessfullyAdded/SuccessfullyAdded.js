import React, { Fragment } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
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
