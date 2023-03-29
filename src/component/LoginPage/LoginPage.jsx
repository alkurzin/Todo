import React from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../asyncAction/login';
import { setEmail, setPassword } from '../../redux/login-reducer';
import './LoginPage.css'

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useSelector(state => state.loginPage.email);
    const password = useSelector(state => state.loginPage.password);
    const isLoading = useSelector(state => state.loginPage.isLoading);

    let onEmialChange = (e) => {
        let body = e.target.value;
        dispatch(setEmail(body));
    }

    let onPasswordChange = (e) => {
        let body = e.target.value;
        dispatch(setPassword(body));
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(login(email, password)).then(res => {
            if (localStorage.getItem('token')) {
                navigate('/', { require: true });
            }
        });
    }

    return (
        <div>
            {
                isLoading ?
                    <Spinner animation="border" className='loader' />
                    :
                    <div className="register-form__page">
                        <div className="register-form__container">
                            <h2 className="register-form__heading">Вход в аккаунт</h2>
                            <form onSubmit={handleSubmit} className='register-form__form'>
                                <input type='email'
                                    id='email'
                                    name='email'
                                    value={email}
                                    onChange={onEmialChange}
                                    placeholder='E-mail'
                                    className="register-form__input">
                                </input>
                                <input type='password'
                                    id='password'
                                    name='password'
                                    value={password}
                                    onChange={onPasswordChange}
                                    placeholder='Пароль'
                                    className="register-form__input">
                                </input>
                                <button onClick={() => handleSubmit} className="login-form__btn">Войти</button>
                            </form>
                        </div>
                    </div>
            }

        </div>
    )
}

export default LoginPage