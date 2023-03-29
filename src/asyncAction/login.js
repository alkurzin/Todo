import { setIsLoading } from "../redux/login-reducer";
import request from "../requests/request";

export const login = (email, password) => {
    return async dispatch => {
        dispatch(setIsLoading(true));
        await request.post('/Account/Login', {
            email: email,
            password: password
        })
        .then(res => {
            console.log(res.AxiosError );
            if (res.status === 200) {
                localStorage.setItem('userId', res.data.id);
                localStorage.setItem('token', res.data.token);
            }
            dispatch(setIsLoading(false));
        })
        .catch(error => {
            if (error.response) {
                dispatch(setIsLoading(false));
                alert("Неверный логин или пароль!")
            }
        })
    }
}