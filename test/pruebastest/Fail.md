# Mocking with Jest

## Demo
    const firebase = jest.genMockFromModule('../src/firebase.js');

    firebase.firestore = firestore;
    firebase.auth = auth;

    export default firebase;

- Corremos los tests y ahora pasan sin embargo la cobertura no es 100% y
  ahora intentamos crear un mock para **onSnapshot** y te das cuenta
  que es más complicado.
- Presentamos [firebase-mock](https://github.com/soumak77llll/firebase-mock) 
- Realizamos configuracion de los mocks
- Corremos los test y alcanzamos la cobertura y tests pasan
