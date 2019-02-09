// Import libraries
import React, { Component } from 'react';
import axios from 'axios';
import Styles  from './paginaRegisLog.css';

import { cloud } from '../../assets';
import { Formulario, LogIn } from '@Components';

import { Switch, Route, Link, BrowserRouter, Redirect } from 'react-router-dom';

import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
///////////// Component ////////////////
export class PaginaResgisLog extends Component {

    render() {
        return (
            <div className={Styles.container}>
                <img src={cloud} className={Styles.image}/>
                <div className={Styles.title}>Wedding Cloud</div>
                <div className="row">
                    <div className="col-l6 mx-5">
                        <Formulario />
                    </div>
                    <div className="col-l6 mx-5">
                        <LogIn />
                    </div>
                </div>
            </div>
        )
    }
}
