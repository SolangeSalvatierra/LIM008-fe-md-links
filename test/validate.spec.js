import {validateLinks} from '../src/models/validate.js';

const input = [{ href: 'https://github.com/mikkopaderes/mock-cloud-firestore',
  text: 'mock-cloud-firestore',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md' }];

const ouput = [ { href: 'https://github.com/mikkopaderes/mock-cloud-firestore',
  text: 'mock-cloud-firestore',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md',
  resultstatus: 200,
  value: 'OK' } ];

const input1 = [{ href: 'https://github.com/soumak77llll/firebase-mock',
  text: 'firebase-mock',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md' }];

const ouput1 = [ { href: 'https://github.com/soumak77llll/firebase-mock',
  text: 'firebase-mock',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md',
  resultstatus: 404,
  value: 'Fail' } ];

test('Debería retornar el objeto ingresado adicionando las propiedades status 200 y value OK', (done) => {
  validateLinks(input).then((result) => {
    expect(result).toEqual(ouput);
    done();
  });
});

test('Debería retornar el objeto ingresado adicionando las propiedades status 400 y value Fail', (done) => {
  validateLinks(input1).then((result) => {
    expect(result).toEqual(ouput1);
    done();
  });
});

