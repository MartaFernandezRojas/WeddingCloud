// Import libraries
import React, { Component } from 'react';
import axios from 'axios';

import { FormularioConfirmacion } from '../formConfirmacion';
import styles from '../../routes/router/router.styles.css';
import { Switch, Redirect, BrowserRouter, } from 'react-router-dom';


///////////// Component ////////////////
export class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailregistro: '',
            passwordregistro: '',
            redirect: false,
            redirect2: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });

    }
    logInUser() {
        let user = {
            email: this.state.emailregistro,
            password: this.state.passwordregistro
        }
        axios.post('http://localhost:3000/log/logIn', user)
            .then(response => {
                if (response.status === 200) {
                    if (response.data.rol == 0) {
                        localStorage.setItem('invitado', JSON.stringify(response.data));
                        this.setState({ redirect: true })
                    }
                 else {
                    localStorage.setItem('invitado', JSON.stringify(response.data));
                    this.setState({ redirect2: true })
                    console.log(this.state.redirect2);
                    console.log(this.state.redirect);
                }
            }
            
            })
        }
    render() {
        const redireccion = this.state.redirect ? <Redirect from="/" to="/FormularioConfirmacion" /> : null
        const redireccion2 = this.state.redirect2 ? <Redirect from="/" to="/gestionInvitados" /> : null
        return (
            <div>
                <h5>Log In</h5>
                <form >
                    <label form="email">Email:</label>
                    <input className="form-control validate" id="emailregistro" type="email" name="Email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                    <label form="password">Passsword:</label>
                    <input className="form-control" id="passwordregistro" type="password" name="Password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    <input type='button' onClick={() => {
                        this.logInUser();
                    }
                    } className={styles.button} value='Confirmar' />

                </form>
                {redireccion}
                {redireccion2}
            </div>
        );
    }
}

