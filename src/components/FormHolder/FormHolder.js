import React, {Component} from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ChooseGenre from '../ChooseGenre/ChooseGenre';
// import ChooseSubgenre from '../ChooseSubgenre/ChooseSubgenre';
import CreateSubgenre from '../CreateSubgenre/CreateSubgenre';
import Information from '../Information/Information';
import {selectGenre, nextStep, prevStep, selectSubgenre, handleSubgenreTitle, handleDescription} from '../../Store/Reducer/Reducer';

class FormHolder extends Component {
  renderSteps = () => {
    const {state: {step, genres, selectedGenreId, selectedSubgenreId, subgenreTitle, subgenreDescription}, nextStep, prevStep, selectGenre, selectSubgenre, handleSubgenreTitle, handleDescription} = this.props;
    let subgenres = [{
      id: 'createSubgenre',
      name: 'Add New'
    }];
    if (selectedGenreId) {
      let subgenresFiltered = genres.filter(g => g.id === selectedGenreId)[0].subgenres;
      subgenres = [...subgenresFiltered, ...subgenres]
      // subgenres.push({
      //   id: 'createSubgenre',
      //   name: 'Add New'
      // })
    }
    console.log(subgenres, 'subgenres')

    switch(step) {
      case 4:
        return (
          <ChooseGenre 
            step={step}
            genres={genres} 
            selectGenre={selectGenre} 
            selectedGenreId={selectedGenreId}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 2:
        return (
          <ChooseGenre 
            step={step}
            genres={subgenres} 
            selectGenre={selectSubgenre} 
            selectedGenreId={selectedSubgenreId}
            subgenre
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <CreateSubgenre
            subgenreTitle={subgenreTitle}
            handleSubgenreTitle={handleSubgenreTitle}
            subgenreDescription={subgenreDescription}
            handleDescription={handleDescription}
            step={step}
            nextStep={nextStep}
            prevStep={prevStep}
           />
        );
      case 1:
        return (
          <Information
            // subgenreTitle={subgenreTitle}
            // handleSubgenreTitle={handleSubgenreTitle}
            // subgenreDescription={subgenreDescription}
            // handleDescription={handleDescription}
            step={step}
            nextStep={nextStep}
            prevStep={prevStep}
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
        <h1>Step: {step}</h1>
        {this.renderSteps()}
        {/* buttons */}
        {/* <div>
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
        </div> */}
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
    handleSubgenreTitle: () => dispatch(handleSubgenreTitle()),
    handleDescription: () => dispatch(handleDescription()),
   };
}

const dispatchToProps = {
  mapDispatchToProps, 
  selectGenre,
  selectSubgenre,
  nextStep,
  prevStep,
  handleSubgenreTitle,
  handleDescription,
}

export default connect(mapStateToProps, dispatchToProps)(FormHolder);
