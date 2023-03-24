const SET_EMAIL = "SET_EMAIL";
const SET_PASSWORD = "SET_PASSWORD";

let initialState = {
    email: "",
    password: ""
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        default:
            return state;
    }
}

export const setEmail = (payload) => ({type: SET_EMAIL, payload});
export const setPassword = (payload) => ({type: SET_PASSWORD, payload});

export default loginReducer;