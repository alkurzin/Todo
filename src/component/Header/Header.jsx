import React from 'react'
import './Header.css'
import logo from '../../icons/jpg/logo.jpg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate();

    let out = () => {
        localStorage.removeItem('token');
        navigate('/login', { require: true });

    }
    return (
        <div>
            <header id="Head" className="header">
                <img className="header__logo" alt="logo" src={logo}></img>
                <span className="header__title">Todo</span>

                <button className='btn-out' onClick={out}>Выход</button>
            </header>
        </div>
    )
}

export default Header
