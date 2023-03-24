const SET_TASKS = "SET_TASKS";

let initialState = {
    tasks: []
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.tasks
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

export default taskReducer;
