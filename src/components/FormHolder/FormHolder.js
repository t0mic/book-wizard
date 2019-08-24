import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import ChooseGenre from "../ChooseGenre/ChooseGenre";
import CreateSubgenre from "../CreateSubgenre/CreateSubgenre";
import Information from "../Information/Information";
import SuccessfullyAdded from "../SuccessfullyAdded/SuccessfullyAdded";
import {
  selectGenre,
  nextStep,
  prevStep,
  selectSubgenre,
  handleSubgenreTitle,
  handleDescription,
  handleInputChange,
  handleDescriptionText,
  handleDateChange,
  handleResetState
} from "../../Store/Reducer/Reducer";

class FormHolder extends Component {
  static propTypes = {
    handleDateChange: PropTypes.func.isRequired,
    handleResetState: PropTypes.func.isRequired,
    handleDescriptionText: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleDescription: PropTypes.func.isRequired,
    handleSubgenreTitle: PropTypes.func.isRequired,
    selectSubgenre: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    selectGenre: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
  };
  state = {
    pageWidth: window.innerWidth
  };
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        pageWidth: window.innerWidth
      });
    });
  }
  componentWillUnmount() {
    window.removeEventListener("resize");
  }
  renderSteps = () => {
    const {
      state: {
        step,
        genres,
        selectedGenreId,
        selectedSubgenreId,
        subgenreTitle,
        subgenreDescription,
        informationForm
      },
      nextStep,
      prevStep,
      selectGenre,
      selectSubgenre,
      handleSubgenreTitle,
      handleDescription,
      handleInputChange,
      handleDescriptionText,
      handleDateChange,
      handleResetState
    } = this.props;
    const { pageWidth } = this.state;
    let subgenres = [
      {
        id: "createSubgenre",
        name: "Add New"
      }
    ];
    let showDesc = false;
    if (selectedGenreId) {
      let subgenresFiltered = genres.find(g => g.id === selectedGenreId)
        .subgenres;
      subgenres = [...subgenresFiltered, ...subgenres];
    }
    if (selectedSubgenreId && selectedSubgenreId !== "createSubgenre") {
      showDesc = subgenres.find(s => s.id === selectedSubgenreId)
        .isDescriptionRequired;
    }
    if (selectedSubgenreId && selectedSubgenreId === "createSubgenre") {
      showDesc = subgenreDescription;
    }

    switch (step) {
      case 1:
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
      case 4:
        return (
          <Information
            pageWidth={pageWidth}
            step={step}
            nextStep={nextStep}
            prevStep={prevStep}
            informationForm={informationForm}
            handleInputChange={handleInputChange}
            handleDescriptionText={handleDescriptionText}
            handleDateChange={handleDateChange}
            showDesc={showDesc}
          />
        );
      case 5:
        return <SuccessfullyAdded handleResetState={handleResetState} />;
      default:
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
    }
  };

  render() {
    const {
      state: { step }
    } = this.props;

    return (
      <Container maxWidth="md">
        {/* header with counter */}
        <h1>Step: {step}</h1>
        {this.renderSteps()}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectGenre: () => dispatch(selectGenre()),
    selectSubgenre: () => dispatch(selectSubgenre()),
    nextStep: () => dispatch(nextStep()),
    prevStep: () => dispatch(prevStep()),
    handleSubgenreTitle: () => dispatch(handleSubgenreTitle()),
    handleDescription: () => dispatch(handleDescription()),
    handleInputChange: () => dispatch(handleInputChange()),
    handleDescriptionText: () => dispatch(handleDescriptionText()),
    handleDateChange: () => dispatch(handleDateChange()),
    handleResetState: () => dispatch(handleResetState())
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
  handleInputChange,
  handleDescriptionText,
  handleDateChange,
  handleResetState
};

export default connect(
  mapStateToProps,
  dispatchToProps
)(FormHolder);
