// Import libraries
import React, { Component } from 'react';
// Import global resources
import { logo2 } from '../../assets';
import { Text, Galeria, Formulario, LogIn, FormularioConfirmacion} from '../../components';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';

// Import local resources
import styles from './router.styles.css';

///////////// Component ////////////////
export class Router extends Component {
  state = {
    products: [],
  };

  handdleStore = () => {
    console.log('Click ver store');
  };

  handdleDispatch = () => {
    console.log('Click Lanzar accion');
  };

  // componentDidMount() {
  //   if (this.props.getProduct) this.props.getProduct();
  // }

  render() {
    return (
      <BrowserRouter>
      <Switch >
        <Route path="/" exact render={() => {
          return (
          <div className={styles.container}>
            <img src={logo2} className={styles.image} />
            <h1 className={styles.title}>Wedding Cloud</h1>
            <div className={styles.subContainer}>
              <Formulario />
              <hr className={styles.linea} />
              <LogIn />
            </div>
          </div>)
        }} />
         <Route path="/FormularioConfirmacion" exact component={FormularioConfirmacion} />
      </Switch>
      </BrowserRouter>
    );
  }
}
