import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ControlButtons from '../ControlButtons/ControlButtons';

import styles from './ChooseGenre.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  activePaper: {
    backgroundColor: 'red'
  }
}));

export default function ChooseGenre(props) {
  const {step, genres, selectGenre, selectedGenreId, subgenre, nextStep, prevStep} = props;
  const classes = useStyles();

  const chooseGenre = (genre) => {
    if (genre.id === 'createSubgenre') {
      console.log('kreiraj novi')
      selectGenre(genre);
    } else {
      selectGenre(genre);
    }
  }

  return (
    <Fragment>
      <Grid container spacing={3}>
        {genres.map(g => (
          <Grid key={g.id} onClick={() => {chooseGenre(g)}} item xs={3}>
            <Paper className={`${classes.paper} ${styles.paper} ${g.id === selectedGenreId ? classes.activePaper : ''}`}>{g.name}</Paper>
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