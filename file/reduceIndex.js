import { combineReducers } from 'redux';
import addText from './reducers';

const root = combineReducers({
    adds : addText
});

export default root;