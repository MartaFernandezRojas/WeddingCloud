// Import libraries
import React, { Component } from 'react';

// Import global resources
import { logo2 } from '@Assets';
import { Text, Galeria } from '@Components';

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

  componentDidMount() {
    if (this.props.getProduct) this.props.getProduct();
  }

  render() {
    return (
      <div className={styles.container}>
        <img src={logo2} className={styles.image} />
        <h1 className={styles.title}>Tu Algo Azul</h1>
        <div className={styles.subContainer}>
          <a onClick={this.handdleStore} className={styles.button}>
            Ver el Store
          </a>
          <a onClick={this.handdleDispatch} className={styles.button}>
            Lanzar Acción
          </a>
        </div>
        <div className={styles.text}>
          <Text />
        </div>
        <Galeria/>
        {/* {products.map((i) => <Galeria key={i.id} data={i} />)} */}
      </div>
    );
  }
}
