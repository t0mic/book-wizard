import { genres } from '../genres';

const initialState = {
  step: 1,
  genres: genres.genres,
  selectedGenreId: null,
  selectedSubgenreId: null
};

const SELECT_GENRE = 'SELECT_GENRE';
const SELECT_SUBGENRE = 'SELECT_SUBGENRE';
const NEXT_STEP = 'NEXT_STEP';
const PREV_STEP = 'PREV_STEP';

export function selectGenre (data) {
  return {
    type: SELECT_GENRE,
    data
  }
}
export function selectSubgenre (data) {
  return {
    type: SELECT_SUBGENRE,
    data
  }
}
export function nextStep () {
  return {
    type: NEXT_STEP
  }
}
export function prevStep () {
  return {
    type: PREV_STEP
  }
}

function reducer(state = initialState, action) {
  console.log('reducer', state, action, genres);
  switch(action.type) {
    case SELECT_GENRE: {
      console.log(action, 'action select genre');
      const data = action.data;
      let newState = {...state};

      if (newState.selectedGenreId !== data.id) {
        newState.selectedGenreId = data.id;
      } else {
        newState.selectedGenreId = null;
      }

      return newState;
    }
    case SELECT_SUBGENRE: {
      console.log(action, 'action select SELECT_SUBGENRE');
      const data = action.data;
      let newState = {...state};

      if (newState.selectedSubgenreId !== data.id) {
        newState.selectedSubgenreId = data.id;
      } else {
        newState.selectedSubgenreId = null;
      }

      return newState;
    }
    case NEXT_STEP: {
      console.log(action, 'action NEXT_STEP');
      let newState = {...state};

      newState.step = newState.step + 1;

      return newState;
    }
    case PREV_STEP: {
      console.log(action, 'action PREV STEp');
      let newState = {...state};

      newState.step = newState.step - 1;

      return newState;
    }
    default:
      return state;
  }
}

export default reducer