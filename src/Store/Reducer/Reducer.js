const initialState = {
  count: 15
};

function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  return state;
}

export default reducer