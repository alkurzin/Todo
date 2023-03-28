const SET_TITLE = "SET_TITLE";
const SET_DESCRIPTION = "SET_DESCRIPTION";
const SET_PRIORITY = "SET_PRIORITY";

let initialState = {
    title: "",
    description: "",
    priority: 1
}

const newTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TITLE:
            return {
                ...state,
                title: action.title
            }
        case SET_DESCRIPTION:
            return {
                ...state,
                description: action.description
            }
        case SET_PRIORITY:
            return {
                ...state,
                priority: action.priority
            }
        default:
            return state;
    }
}

export const setTitle = (title) => {
    return {
        type: SET_TITLE,
        title: title
    };
}

export const setDescription = (description) => {
    return {
        type: SET_DESCRIPTION,
        description: description
    };
}

export const setPriority = (priority) => {
    return {
        type: SET_PRIORITY,
        priority: priority
    };
}
export default newTaskReducer;