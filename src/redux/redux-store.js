import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import editTaskReducer from './editTask-reducer';
import loginReducer from './login-reducer';
import newTaskReducer from './newTask-reducer';
import taskReducer from './task-reducer';


let reducers = combineReducers({
    loginPage: loginReducer,
    taskPage: taskReducer,
    newTaskModal: newTaskReducer,
    editTaskModal: editTaskReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;