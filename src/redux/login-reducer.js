const SET_EMAIL = "SET_EMAIL";
const SET_PASSWORD = "SET_PASSWORD";
const SET_IS_LOADING = "SET_IS_LOADING";

let initialState = {
    email: "",
    password: "",
    isLoading: false
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
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}

export const setEmail = (payload) => ({ type: SET_EMAIL, payload });
export const setPassword = (payload) => ({ type: SET_PASSWORD, payload });
export const setIsLoading= (payload) => ({ type: SET_IS_LOADING, payload });

export default loginReducer;