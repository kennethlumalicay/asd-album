import {combineReducers} from 'redux';
import UserReducer from './reducer-user';
import ImgReducer from './reducer-img';


const allReducers = combineReducers({
    user: UserReducer,
    img: ImgReducer
});

export default allReducers;