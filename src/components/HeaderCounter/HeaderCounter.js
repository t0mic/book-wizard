import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import styles from "./HeaderCounter.css";

export default function HeaderCounter(props) {
  const { step, selectedSubgenreId } = props;
  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item md={3} sm={3} xs={3}>
              <Fragment>
                <div
                  className={`${styles.circle} ${styles.noLine} ${styles.active}`}
                >
                  1
                </div>
                <p
                  className={`${styles.stepDescGenre} ${styles.stepDescActive}`}
                >
                  Genre
                </p>
              </Fragment>
            </Grid>
            <Grid item md={3} sm={3} xs={3}>
              <Fragment>
                <div className={styles.circle}>2</div>
                <p className={`${styles.stepDesc}`}>Subgenre</p>
              </Fragment>
            </Grid>
            <Grid item md={3} sm={3} xs={3}>
              <div className={styles.circle}>...</div>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item md={3} sm={3} xs={3}>
              <Fragment>
                <div className={`${styles.circle} ${styles.noLine}`}>1</div>
                <p className={`${styles.stepDescGenre}`}>Genre</p>
              </Fragment>
            </Grid>
            <Grid item md={3} sm={3} xs={3}>
              <Fragment>
                <div className={`${styles.circle} ${styles.active}`}>2</div>
                <p className={`${styles.stepDesc} ${styles.stepDescActive}`}>
                  Subgenre
                </p>
              </Fragment>
            </Grid>
            <Grid item md={3} sm={3} xs={3}>
              <div className={styles.circle}>...</div>
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Grid container spacing={3}>
            <Grid item md={3} sm={3} xs={3}>
              <Fragment>
                <div className={`${styles.circle} ${styles.noLine}`}>1</div>
                <p className={`${styles.stepDescGenre}`}>Genre</p>
              </Fragment>
            </Grid>
            <Grid item md={3} sm={3} xs={3}>
              <Fragment>
                <div className={`${styles.circle}`}>2</div>
                <p className={`${styles.stepDesc}`}>Subgenre</p>
              </Fragment>
            </Grid>
            <Grid item md={3} sm={3} xs={3}>
              <Fragment>
                <div className={`${styles.circle} ${styles.active}`}>3</div>
                <p className={`${styles.stepDescNew} ${styles.stepDescActive}`}>
                  Add new subgenre
                </p>
              </Fragment>
            </Grid>
            <Grid item md={3} sm={3} xs={3}>
              <Fragment>
                <div className={`${styles.circle}`}>4</div>
                <p className={`${styles.stepDescInfo}`}>Information</p>
              </Fragment>
            </Grid>
          </Grid>
        );
      case 4:
        return (
          <Grid container spacing={3}>
            <Grid item md={3} sm={3} xs={3}>
              <Fragment>
                <div className={`${styles.circle} ${styles.noLine}`}>1</div>
                <p className={`${styles.stepDescGenre}`}>Genre</p>
              </Fragment>
            </Grid>
            <Grid item md={3} sm={3} xs={3}>
              <Fragment>
                <div className={`${styles.circle}`}>2</div>
                <p className={`${styles.stepDesc}`}>Subgenre</p>
              </Fragment>
            </Grid>
            {selectedSubgenreId && selectedSubgenreId === "createSubgenre" ? (
              <Fragment>
                <Grid item md={3} sm={3} xs={3}>
                  <Fragment>
                    <div className={`${styles.circle}`}>3</div>
                    <p className={`${styles.stepDescNew}`}>Add new subgenre</p>
                  </Fragment>
                </Grid>
                <Grid item md={3} sm={3} xs={3}>
                  <Fragment>
                    <div className={`${styles.circle} ${styles.active}`}>4</div>
                    <p
                      className={`${styles.stepDescInfo} ${styles.stepDescActive}`}
                    >
                      Information
                    </p>
                  </Fragment>
                </Grid>
              </Fragment>
            ) : (
              <Fragment>
                <Grid item md={3} sm={3} xs={3}>
                  <div className={`${styles.circle}`}>...</div>
                </Grid>
                <Grid item md={3} sm={3} xs={3}>
                  <Fragment>
                    <div className={`${styles.circle} ${styles.active}`}>4</div>
                    <p
                      className={`${styles.stepDescInfo} ${styles.stepDescActive}`}
                    >
                      Information
                    </p>
                  </Fragment>
                </Grid>
              </Fragment>
            )}
          </Grid>
        );
      default:
        return;
    }
  };
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item md={12} sm={12} xs={12}>
          {renderSteps()}
        </Grid>
      </Grid>
    </Fragment>
  );
}

HeaderCounter.propTypes = {
  step: PropTypes.number.isRequired,
  selectedSubgenreId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
};
