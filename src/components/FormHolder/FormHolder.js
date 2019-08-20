import React, {Component} from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ChooseGenre from '../ChooseGenre/ChooseGenre';
// import ChooseSubgenre from '../ChooseSubgenre/ChooseSubgenre';
import {selectGenre, nextStep, prevStep, selectSubgenre} from '../../Store/Reducer/Reducer';

class FormHolder extends Component {
  renderSteps = () => {
    const {state: {step, genres, selectedGenreId, selectedSubgenreId}, selectGenre, selectSubgenre} = this.props;
    let subgenres = [];
    if (selectedGenreId) {
      subgenres = genres.filter(g => g.id === selectedGenreId)[0].subgenres;
    }
    console.log(subgenres, 'subgenres')

    switch(step) {
      case 1:
        return (
          <ChooseGenre 
            genres={genres} 
            selectGenre={selectGenre} 
            selectedGenreId={selectedGenreId}
          />
        );
      case 2:
        return (
          <ChooseGenre 
            genres={subgenres} 
            selectGenre={selectSubgenre} 
            selectedGenreId={selectedSubgenreId}
          />
        );
      default: 
        return (<h1>Default view</h1>);
    }
  }

  render () {
    console.log(this.props, 'props')
    const {state: {step, selectedGenreId}, prevStep, nextStep} = this.props;

    return (
      <Container maxWidth="md">
        {/* header with counter */}
        <h1>This will be our app</h1>
        {this.renderSteps()}
        {/* buttons */}
        <div>
        <Button 
          onClick={prevStep}
          variant="contained"
          disabled={step === 1}>
          Back
        </Button>
        <Button 
          onClick={nextStep}
          variant="contained"
          color="primary"
          disabled={!selectedGenreId}>
          Next
        </Button>
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
};

function mapDispatchToProps(dispatch) {
  return {
    selectGenre: () => dispatch(selectGenre()),
    selectSubgenre: () => dispatch(selectSubgenre()),
    nextStep: () => dispatch(nextStep()),
    prevStep: () => dispatch(prevStep()),
   };
}

const dispatchToProps = {
  mapDispatchToProps, 
  selectGenre,
  selectSubgenre,
  nextStep,
  prevStep,
}

export default connect(mapStateToProps, dispatchToProps)(FormHolder);
