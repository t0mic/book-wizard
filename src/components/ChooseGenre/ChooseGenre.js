import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
  const {genres, selectGenre, selectedGenreId} = props;
  const classes = useStyles();

  console.log(genres, 'genres from choose one')
  return (
    <Grid container spacing={3}>
      {genres.map(g => (
        <Grid key={g.id} onClick={() => {selectGenre(g)}} item xs={3}>
          <Paper className={`${classes.paper} ${styles.paper} ${g.id === selectedGenreId ? classes.activePaper : ''}`}>{g.name}</Paper>
        </Grid>
      ))}
    </Grid>
  );
}