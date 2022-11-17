import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import * as authService from '../../services/authService';

const Register = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
        'confirm-password': ''
    });

    const registerHandler = (ev) => {
        ev.preventDefault();

        if (Object.values(values).some(x => x == '')) {
            alert('All fields are required!');
        } else if (values.password !== values['confirm-password']) {
            alert('Passwords missmatch detected!');
        } else {
            authService.registerUser(values)
                .then(user => {
                    userLogin(user);
                    navigate('/', { replace: true });
                })
                .catch(err => alert(err.message));
        }
    }

    const changeHandler = (ev) => {
        setValues(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={(ev) => registerHandler(ev)}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <input className="btn submit" type="submit" defaultValue="Register" />
                    <p className="field">
                        <span>
                            If you already have profile click <Link to="/login">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}

export default Register;