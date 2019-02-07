//Import libraries
import React, { Component } from 'react';
import axios from 'axios';

import { FormularioConfirmacion } from '../formConfirmacion';
import { Switch, Redirect, BrowserRouter, } from 'react-router-dom';
import { Navbar } from '../navbar/navbar.component';
import styles from './mesas.styles.css';
// import Draggable from 'react-draggable';
import classNames from 'classnames'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import styles2 from './formConfirmacion.styles.css';
///////////// Component ////////////////




const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: `item ${k + offset}`
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250
});

export class Mesas extends Component {


    constructor(props) {
        super(props);
        this.state = {
            familiaNovio: [],
            familiaNovia: [],
            amigosNovio: [],
            amigosNovia: [],
            items: getItems(10),
            selected: getItems(5, 10)
        };
        this.handleChange = this.handleChange.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }
    id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            if (source.droppableId === 'droppable2') {
                this.state = { selected: items };
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2
            });
        }
    };

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    componentDidMount() {
        var invitado = JSON.parse(localStorage.getItem("invitado"));
        this.state.nombre = invitado.nombre;
        console.log(invitado.id_boda);

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
    onDrop(data) {
        console.log(data);
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
                            <div className={styles.circle}><div><h3>1</h3></div></div>
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
                                            return (
                                             
                                                <li className="list-group-item list-group-item-info"><p>{e.nombre} {e.apellido} </p></li>
                                         
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="col l3">
                                    <p>Familia del Novia</p>
                                    <ul className="list-group">
                                        {this.state.familiaNovia.map((e, index) => {
                                            return (<p></p>
                                                // <Draggable>
                                                //     <li className="list-group-item list-group-item-danger"><p>{e.nombre} {e.apellido} </p></li>
                                                // </Draggable>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="col l3">
                                    <p>Amigas de la novio</p>
                                    <ul className="list-group">
                                        {this.state.amigosNovio.map((e, index) => {
                                            return (<p></p>
                                                // <Draggable>
                                                //     <li className="list-group-item list-group-item-secondary"><p>{e.nombre} {e.apellido} </p></li>
                                                // </Draggable>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="col l3">
                                    <p>Amigos del novia</p>
                                    <ul className="list-group">
                                        {this.state.amigosNovia.map((e, index) => {
                                            return (<p></p>
                                                // <Draggable>
                                                //     <li className="list-group-item list-group-item-success"><p>{e.nombre} {e.apellido} </p></li>
                                                // </Draggable>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}>

                                {this.state.familiaNovio.map((e, index) => {
                                    <Draggable
                                        key={e.id}
                                        draggableId={e.id}
                                        index={index}>
                                       
                                       {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                 <li>{e.nombre}</li>
                                            </div>
                                        )} 
                                    </Draggable>
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <Droppable droppableId="droppable2">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}>
                                {this.state.selected.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                {item.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

            </div>

        )
    }
}


