// Import libraries
import React, { Component } from 'react';
import axios from 'axios';

import { paginaInicio, paginaInicio2 } from '../../assets';
import { FormularioConfirmacion } from '../formConfirmacion';
import { LogIn, Formulario, NavbarInicio } from '@Components'
import style2 from './paginaInicio.css';
import { cloud } from '../../assets';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
///////////// Component ////////////////
export class PaginaInicio extends Component {

    render() {
        return (
            <div>
                <NavbarInicio />
                <div className="container-fluid">

                    <div className={style2.wrapper}>
                        <section className={style2.bloque1}>

                        </section>
                        <section className={style2.bloque2}>

                        </section>
                        <section className={style2.bloque3}>
                            
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

