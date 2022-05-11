import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

function LoginForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const sessionUser = useSelector(state => state.session.user);

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data) {
            setErrors(data);
        }
        history.push("/Home")
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if (sessionUser) return ( <Redirect to="/Home" /> );
    return (
        <div className="auth-form-container">
            <form className="auth-form" onSubmit={onLogin}>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    <label className="auth-label" htmlFor='email'>Email</label>
                    <input className="auth-input"
                        name='email'
                        type='text'
                        placeholder='Email'
                        value={email}
                        onChange={updateEmail}
                    />
                </div>
                <div>
                    <label className="auth-label" htmlFor='password'>Password</label>
                    <input className="auth-input"
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={updatePassword}
                    />
                    <button id="login-submit" type='submit'>Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;