import { genres } from "../genres";
import { EditorState, convertToRaw } from "draft-js";
import draftToMarkdown from "draftjs-to-markdown";

const informationForm = {
  bookTitle: "",
  author: "",
  isbn: "",
  publisher: "",
  publishDate: new Date(),
  pagenum: "",
  format: "",
  edition: "",
  editionLagnuage: "",
  description: EditorState.createEmpty()
};

const baseState = {
  step: 1,
  genres: genres.genres,
  selectedGenreId: null,
  selectedSubgenreId: null,
  subgenreTitle: "",
  subgenreDescription: false,
  informationForm: {
    ...informationForm
  }
};
const initialState = {
  ...baseState
};

const SELECT_GENRE = "SELECT_GENRE";
const SELECT_SUBGENRE = "SELECT_SUBGENRE";
const NEXT_STEP = "NEXT_STEP";
const PREV_STEP = "PREV_STEP";
const SUBGENRE_TITLE = "SUBGENRE_TITLE";
const SUBGENRE_DESC = "SUBGENRE_DESC";
const UPDATE_INFORMATION_INPUTS = "UPDATE_INFORMATION_INPUTS";
const UPDATE_DESC = "UPDATE_DESC";
const UPDATE_DATE = "UPDATE_DATE";
const RESET_STATE = "RESET_STATE";

export function selectGenre(data) {
  return {
    type: SELECT_GENRE,
    data
  };
}
export function selectSubgenre(data) {
  return {
    type: SELECT_SUBGENRE,
    data
  };
}
export function nextStep() {
  return {
    type: NEXT_STEP
  };
}
export function prevStep() {
  return {
    type: PREV_STEP
  };
}
export function handleSubgenreTitle(data) {
  return {
    type: SUBGENRE_TITLE,
    data
  };
}
export function handleDescription() {
  return {
    type: SUBGENRE_DESC
  };
}
export function handleInputChange(data) {
  return {
    type: UPDATE_INFORMATION_INPUTS,
    data
  };
}
export function handleDescriptionText(data) {
  return {
    type: UPDATE_DESC,
    data
  };
}
export function handleDateChange(data) {
  return {
    type: UPDATE_DATE,
    data
  };
}
export function handleResetState() {
  return {
    type: RESET_STATE
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_GENRE: {
      const data = action.data;
      let newState = { ...state };

      if (newState.selectedGenreId !== data.id) {
        newState.selectedGenreId = data.id;
        newState.selectedSubgenreId = null;
      } else {
        newState.selectedGenreId = null;
        newState.selectedSubgenreId = null;
      }

      return newState;
    }
    case SELECT_SUBGENRE: {
      const data = action.data;
      let newState = { ...state };

      if (newState.selectedSubgenreId !== data.id) {
        newState.selectedSubgenreId = data.id;
        newState.subgenreTitle = "";
        newState.subgenreDescription = false;
      } else {
        newState.selectedSubgenreId = null;
      }

      return newState;
    }
    case NEXT_STEP: {
      let newState = { ...state };
      if (
        newState.step === 2 &&
        newState.selectedSubgenreId === "createSubgenre"
      ) {
        newState.step = 3;
      } else if (
        newState.step === 2 &&
        newState.selectedSubgenreId !== "createSubgenre"
      ) {
        newState.step = 4;
      } else if (newState.step === 4) {
        let data = {};
        data.genreId = newState.selectedGenreId;
        data.genreTitle = newState.genres.find(
          g => g.id === newState.selectedGenreId
        ).name;
        data.subgenreId = newState.selectedSubgenreId;
        if (newState.selectedSubgenreId === "createSubgenre") {
          data.subgenreTitle = newState.subgenreTitle;
        } else {
          data.subgenreTitle = newState.genres
            .find(g => g.id === newState.selectedGenreId)
            .subgenres.find(sg => sg.id === newState.selectedSubgenreId).name;
        }
        data.bookInfo = {
          ...newState.informationForm,
          description: draftToMarkdown(
            convertToRaw(
              newState.informationForm.description.getCurrentContent()
            )
          )
        };
        console.log(data, "book request data");
        newState.step = newState.step + 1;
      } else {
        newState.step = newState.step + 1;
      }

      return newState;
    }
    case PREV_STEP: {
      let newState = { ...state };

      if (
        newState.step === 4 &&
        newState.selectedSubgenreId !== "createSubgenre"
      ) {
        newState.step = 2;
      } else {
        newState.step = newState.step - 1;
      }

      return newState;
    }
    case SUBGENRE_TITLE: {
      let newState = { ...state };
      newState.subgenreTitle = action.data;

      return newState;
    }
    case SUBGENRE_DESC: {
      let newState = { ...state };
      newState.subgenreDescription = !newState.subgenreDescription;

      return newState;
    }
    case UPDATE_INFORMATION_INPUTS: {
      let newState = { ...state };
      newState.informationForm[action.data.name] = action.data.val;

      return newState;
    }
    case UPDATE_DESC: {
      let newState = { ...state };
      newState.informationForm.description = action.data;

      return newState;
    }
    case UPDATE_DATE: {
      let newState = { ...state };
      newState.informationForm.publishDate = new Date(action.data);

      return newState;
    }
    case RESET_STATE: {
      let newState = { ...baseState, informationForm };

      return newState;
    }
    default:
      return state;
  }
}

export default reducer;
