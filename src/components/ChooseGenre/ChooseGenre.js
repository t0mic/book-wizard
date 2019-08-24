import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import ControlButtons from "../ControlButtons/ControlButtons";

import styles from "./ChooseGenre.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    userSelect: "none"
  },
  activePaper: {
    backgroundColor: "#3f51b5",
    color: "white"
  }
}));

export default function ChooseGenre(props) {
  const {
    step,
    genres,
    selectGenre,
    selectedGenreId,
    nextStep,
    prevStep
  } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={3}>
        {genres.map(g => (
          <Grid
            key={g.id}
            onClick={() => {
              selectGenre(g);
            }}
            item
            xs={12}
            md={3}
            lg={3}
            sm={6}
          >
            <Paper
              className={`${classes.paper} ${styles.paper} ${
                g.id === selectedGenreId ? classes.activePaper : ""
              }`}
            >
              {g.name}
            </Paper>
          </Grid>
        ))}
      </Grid>
      <ControlButtons
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        disabled={!selectedGenreId}
      />
    </Fragment>
  );
}

ChooseGenre.propTypes = {
  step: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  selectGenre: PropTypes.func.isRequired,
  selectedGenreId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired
};
