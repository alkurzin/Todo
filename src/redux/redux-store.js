import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import loginReducer from './login-reducer';
import taskReducer from './task-reducer';


let reducers = combineReducers({
    loginPage: loginReducer,
    taskPage: taskReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;