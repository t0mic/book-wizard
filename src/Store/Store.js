import Reducer from './Reducer/Reducer';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(Reducer, composeWithDevTools());