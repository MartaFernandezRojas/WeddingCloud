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



    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });

    }

    insertUser = idUser => {
        let user = {
            id: idUser,
            mesa: this.state.mesa,
        }
        console.log('dfg');

        axios.post('http://localhost:3000/invitados/updateMesa', user)
            .then(response => {

            })

        this.start();

    }
    render() {

        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <h1>Planificador de mesas de {this.state.nombre}</h1>
                    <div className="row">
                        <div className="col l3">
                            <label form="nombre">Nombre</label>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col l1">

                            <div className={styles.circle}><div><h3>1</h3><ul>
                                {this.state.invitados.map((e, index) => {
                                    if (e.mesa == 1) {
                                        return (
                                            <li className="list-group-item list-group-item-danger"><p>{e.nombre} {e.apellido}<form ><input className="form-control" id="mesa" type="text" value={this.state.mesa} onChange={this.handleChange} /><input type='button' onClick={() => {
                                                this.insertUser(e.id);
                                            }
                                            } value='Asignar' /></form ></p></li>
                                        )
                                    }
                                })}
                            </ul>
                            </div>
                        </div>
                            <div className={styles.circle}><div><h3>6</h3></div></div>
                            <div className={styles.circle}><div><h3>11</h3></div></div>

                        </div>
                        <div className="col l1">
                            <div className={styles.circle}><div><h3>2</h3></div></div>
                            <div className={styles.circle}><div><h3>7</h3></div></div>
                            <div className={styles.circle}><div><h3>12</h3></div></div>

                        </div>
                        <div className="col l1">
                            <div className={styles.circle}><div><h3>3</h3></div></div>
                            <div className={styles.circle}><div><h3>8</h3></div></div>
                            <div className={styles.circle}><div><h3>13</h3></div></div>

                        </div>
                        <div className="col l1">
                            <div className={styles.circle}><div><h3>4</h3></div></div>
                            <div className={styles.circle}><div><h3>9</h3></div></div>
                            <div className={styles.circle}><div><h3>14</h3></div></div>

                        </div>
                        <div className="col l1">
                            <div className={styles.circle}><div><h3>5</h3></div></div>
                            <div className={styles.circle}><div><h3>10</h3></div></div>
                            <div className={styles.circle}><div><h3>15</h3></div></div>

                        </div>
                        <div className={styles.etiquetas}>
                            <div className="row">
                                <div className="col l3">
                                    <p>Familia de la Novio</p>
                                    <ul className="list-group ">
                                        {this.state.familiaNovio.map((e, index) => {
                                            if (e.mesa == 0) {
                                                return (
                                                    <li className="list-group-item list-group-item-danger"><p>{e.nombre} {e.apellido}<form ><input className="form-control" id="mesa" type="text" name={e.id} value={this.state.mesa} onChange={this.handleChange} /><input type='button' onClick={() => {
                                                        this.insertUser(e.id);
                                                    }
                                                    } value='Asignar' /></form ></p></li>

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
                                                    <li className="list-group-item list-group-item-danger"><p>{e.nombre} {e.apellido}<form ><input className="form-control" id="mesa" type="text" name={e.id} value={this.state.mesa} onChange={this.handleChange} /><input type='button' onClick={() => {
                                                        this.insertUser(e.id);
                                                    }
                                                    } value='Asignar' /></form ></p></li>

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
                                                    <li className="list-group-item list-group-item-danger"><p>{e.nombre} {e.apellido}<form ><input className="form-control" id="mesa" type="text" name={e.id} value={this.state.mesa} onChange={this.handleChange} /><input type='button' onClick={() => {
                                                        this.insertUser(e.id);
                                                    }
                                                    } value='Asignar' /></form ></p></li>

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
                                                    <li className="list-group-item list-group-item-danger"><p>{e.nombre} {e.apellido}<form ><input className="form-control" id="mesa" type="text" name="mesa" value={this.state.mesa} onChange={this.handleChange} /><input type='button' onClick={() => {
                                                        this.insertUser(e.id);
                                                    }
                                                    } value='Asignar' /></form ></p></li>

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


