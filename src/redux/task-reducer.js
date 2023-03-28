const SET_TASKS = "SET_TASKS";
const SET_SEARCH_STRING = "SET_SEARCH_STRING";

let initialState = {
    tasks: [],
    searchString: ""
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.tasks
            }
        case SET_SEARCH_STRING:
            return {
                ...state,
                searchString: action.searchString
            }
        default:
            return state;
    }
}

export const setTasks = (tasks) => {
    return {
        type: SET_TASKS,
        tasks: tasks
    };
}

export const setSearchString = (searchString) => {
    return {
        type: SET_SEARCH_STRING,
        searchString: searchString
    };
}

export default taskReducer;
