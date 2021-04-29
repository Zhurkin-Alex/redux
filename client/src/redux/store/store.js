import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/allreducer'


const store = createStore(rootReducer, composeWithDevTools())

