# Mocking with Jest

## Demo

Presentamos [1234567890-1234567890-1234567890-1234567890-1234567890-1234567890-1234567890-1234567890-1234567890-](https://www.google.com)
Presentamos [1234567890-1234567890-1234567890-1234567890-1234567890-1234567890-1234567890-1234567890-1234567890-](https://www.google.com)
Presentamos [1234567890-1234567890-1234567890-1234567890-1234567890-1234567890-1234567890-1234567890-1234567890-](https://www.google.com)
[sigcolor](http://bxwz.09games.com/significadodeloscolores)


- Empezamos con la app corriendo (demostracion de como funciona)
    user: front@end.la
- Escribimos los tests de deleted y auth
- Correr los tests y ver que fallan por `ESModules`
- Recordar ESModulos que vieron en pildora de Arquitectura.
- Instalamos Babel para que **node** comprenda `ESModules`.
- Corremos los tests y falla porque `Firebase` no esta definido.
- Creamos los tests de manera manual (manual mocks)
  manual mock de auth y delete.

    const firestore = jest.fn(() => ({
      collection: (name) => ({
        delete: (id) => new Promise((resolve) => {
          resolve(`Nota eliminada: ${id}`)
        })
      })
    }))

    const auth = jest.fn(() => ({
      signInWithEmailAndPassword: (email, password) => {
        return new Promise((resolve) => {
          resolve({ email: email })
        })
      }
    }))

    const firebase = jest.genMockFromModule('../src/firebase.js');

    firebase.firestore = firestore;
    firebase.auth = auth;

    export default firebase;
  [mock-cloud-firestore](https://github.com/mikkopaderes/mock-cloud-firestore).
- Realizamos configuracion de los mocks
- Corremos los test y alcanzamos la cobertura y tests pasan
