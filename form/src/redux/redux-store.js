import {applyMiddleware, combineReducers, createStore} from 'redux'
import {reducer as formReducer} from 'redux-form'
import thunkMiddleWare from 'redux-thunk'
import appReducer from './app-reducer';

let rootReducer = combineReducers({
    app: appReducer,
    form: formReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export default store;