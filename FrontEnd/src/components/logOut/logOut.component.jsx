// Import libraries
import React, { Component } from 'react';
import axios from 'axios';

import { FormularioConfirmacion } from '../formConfirmacion';
import styles from './logOut.css';
import { Switch, Redirect, BrowserRouter, } from 'react-router-dom';
import stylesform from './logOut.css';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
///////////// Component ////////////////
export class LogOut extends Component {

    state = {
        redirect: false
    };
    logOut() {

        axios.get('http://localhost:3000/log/logOut')
        .then(response => {
            console.log(response)
            if(response.statusText =='OK'){
                localStorage.clear();
                  this.setState({ redirect: true });
            }

        })
    }

    render() {

        const redireccion = this.state.redirect ? <Redirect to="/" /> : null

        return (
            <div className={styles.background}>
                <h5>¿Deseas salir de la plataforma?</h5>
                <form >
                    <input type='button' onClick={() => {
                        this.logOut();
                    }
                    } className={styles.button} value='Salir' />

                </form>
                {redireccion}
            </div>
        );
    }
}
