//Import libraries
import React, { PureComponent } from 'react';
import axios from 'axios';

import { FormularioConfirmacion } from '../formConfirmacion';
import { Switch, Redirect, BrowserRouter, } from 'react-router-dom';
import { Navbar } from '../navbar/navbar.component';
import styles from './mesas.styles.css';
import { Draggable, Droppable } from 'react-drag-and-drop'

// import Draggable from 'react-draggable';
import classNames from 'classnames'
import { style } from 'react-toastify';
// import styles2 from './formConfirmacion.styles.css';
///////////// Component ////////////////

export class Mesas extends PureComponent {

    state = {
        invitados: [],
        familiaNovio: [],
        familiaNovia: [],
        amigosNovio: [],
        amigosNovia: [],
        mesa: 0,
        id: null

    };

    componentDidMount() {
        this.start();
    }

    start = () => {
        var invitado = JSON.parse(localStorage.getItem("invitado"));
        this.state.nombre = invitado.nombre;

        axios.get('http://localhost:3000/invitados/get', { params: { idb: invitado.id_boda } })
            .then(response => {
                this.setState({ invitados: response.data })
            })

        axios.get('http://localhost:3000/admin/noviofamilia', { params: { idb: invitado.id_boda } })
            .then(response => {
                this.setState({ familiaNovio: response.data })
            })
        axios.get('http://localhost:3000/admin/noviafamilia', { params: { idb: invitado.id_boda } })
            .then(response => {
                this.setState({ familiaNovia: response.data })
            })
        axios.get('http://localhost:3000/admin/novioAmigos', { params: { idb: invitado.id_boda } })
            .then(response => {
                this.setState({ amigosNovio: response.data })
            })
        axios.get('http://localhost:3000/admin/noviaAmigos', { params: { idb: invitado.id_boda } })
            .then(response => {
                this.setState({ amigosNovia: response.data })
            })
    }



    // handleChange = event => {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     });

    // }

    // insertUser = idUser => {
    //     let user = {
    //         id: idUser,
    //         mesa: this.state.mesa,
    //     }
    //     console.log('dfg');

    //     axios.post('http://localhost:3000/invitados/updateMesa', user)
    //         .then(response => {

    //         })

    //     this.start();

    // }
    onDrop(mesa, idUser) {


        let user = {
            id: idUser.invitado,
            mesa: mesa,
        }
        console.log(user);
        this.start();
        axios.post('http://localhost:3000/invitados/updateMesa', user)
            .then(response => {

            })

        this.start();
    }

    render() {

        return (
            <div>
                <Navbar />
                <div className="container">
                    <h1>Planificador de mesas de {this.state.nombre}</h1>
                    <div className="row">
                        <div className="col l3">
                            <label form="nombre">Nombre</label>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col l6">

                            <div className={styles.circle}><div><h3>1</h3><ul className={style.lista}>
                                <Droppable
                                    types={['invitado']} // <= allowed drop types
                                    onDrop={this.onDrop.bind(this, 1)}>

                                    {this.state.invitados.map((e, index) => {
                                        if (e.mesa == 1) {
                                            return (
                                                <Draggable type="invitado" data={e.id}> <li className="list-group-item list-group-item-danger"><p>{e.nombre} {e.apellido}</p></li></Draggable>
                                            )
                                        }
                                    })}
                                </Droppable>
                            </ul>
                            </div>
                            </div>

                            <div className={styles.circle}><div><h3>2</h3><ul>
                                <Droppable
                                    types={['invitado']} // <= allowed drop types
                                    onDrop={this.onDrop.bind(this, 2)}>

                                    {this.state.invitados.map((e, index) => {
                                        if (e.mesa == 2) {
                                            return (
                                                <Draggable type="invitado" data={e.id}> <li className="list-group-item list-group-item-danger"><p>{e.nombre} {e.apellido}</p></li></Draggable>
                                            )
                                        }
                                    })}
                                </Droppable>
                            </ul>
                            </div>
                            </div>

                            <div className={styles.circle}><div><h3>11</h3><ul >
                                <Droppable
                                    types={['invitado']} // <= allowed drop types
                                    onDrop={this.onDrop.bind(this, 11)}>

                                    {this.state.invitados.map((e, index) => {
                                        if (e.mesa == 11) {
                                            return (
                                                <Draggable type="invitado" data={e.id}> <li className="list-group-item list-group-item-danger"><p>{e.nombre} {e.apellido}</p></li></Draggable>
                                            )
                                        }
                                    })}
                                </Droppable>
                            </ul>
                            </div>
                            </div>

                        </div>
                        <div className="col l6">
                            <div className={styles.circle}><div><h3>8</h3></div></div>
                            <div className={styles.circle}><div><h3>7</h3></div></div>
                            <div className={styles.circle}><div><h3>12</h3></div></div>

                        </div>
                      
                        <div className={styles.etiquetas}>
                            <div className="row">
                                <div className="col l3">
                                    <p>Familia de la Novio</p>
                                    <ul className="list-group ">
                                        {this.state.familiaNovio.map((e, index) => {
                                            if (e.mesa == 0) {
                                                return (
                                                    <Draggable type="invitado" data={e.id}> <li className="list-group-item list-group-item-danger"><p>{e.nombre} {e.apellido}</p></li></Draggable>
                                                )
                                            }
                                        })}
                                    </ul>
                                </div>
                                <div className="col l3">
                                    <p>Familia del Novia</p>
                                    <ul className="list-group">
                                        {this.state.familiaNovia.map((e, index) => {
                                            if (e.mesa == 0) {
                                                return (
                                                    <Draggable type="invitado" data={e.id}> <li className="list-group-item list-group-item-danger"><p>{e.nombre} {e.apellido}</p></li></Draggable>

                                                )
                                            }
                                        })}
                                    </ul>
                                </div>
                                <div className="col l3">
                                    <p>Amigas de la novio</p>
                                    <ul className="list-group">
                                        {this.state.amigosNovio.map((e, index) => {
                                            if (e.mesa == 0) {
                                                return (
                                                    <Draggable type="invitado" data={e.id}> <li className="list-group-item list-group-item-danger"><p>{e.nombre} {e.apellido}</p></li></Draggable>

                                                )
                                            }
                                        })}
                                    </ul>
                                </div>
                                <div className="col l3">
                                    <p>Amigos del novia</p>
                                    <ul className="list-group">
                                        {this.state.amigosNovia.map((e, index) => {
                                            if (e.mesa == 0) {
                                                return (
                                                    <Draggable type="invitado" data={e.id}> <li className="list-group-item list-group-item-danger"><p>{e.nombre} {e.apellido}</p></li></Draggable>

                                                )
                                            }
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        )
    }
}


