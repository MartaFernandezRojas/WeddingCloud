const getProductSuccess = payload => ({ payload, type: 'PRODUCT_SUCCESS' });
const getProductError = payload => ({ payload, type: 'PRODUCT_ERROR' });

export const getProduct = () => dispatch => {
  fetch('http://localhost:3000/galeria/get')
    .then(res => res.json())
    .then(res => {
      dispatch(getProductSuccess(res));
    })
    .catch(err => {
      dispatch(getProductError(err));
    });
};
