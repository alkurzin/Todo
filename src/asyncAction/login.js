import request from "../requests/request";

export const login = (email, password) => {
    return async () => {
        await request.post('/Account/Login', {
            email: email,
            password: password
        })
        .then(res => {
            if (res.data.token) {
                localStorage.setItem('userId', res.data.id);
                localStorage.setItem('token', res.data.token);
            }
        })
    }
}