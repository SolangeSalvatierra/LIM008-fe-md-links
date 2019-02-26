import{
    evaluatePath,
    transformToAbsPath,
    recognizelflsFile,
} from '../src/models/links.js';

let paths = require('path');

describe ('evaluatePath', () => {
    it.only ('debería ser igual a una función', () => {
        expect(typeof evaluatePath).toBe ('function');
        });
    it.only ('debería retornar true si la ruta es absoluta', () => {
        expect (evaluatePath('C:\\mi-ruta-absoluta')) .toEqual (true);
        });
    it.only ('debería retornar false si la ruta es relativa',() =>{
         expect (evaluatePath('.\\mi-ruta-relativa')).toEqual(false);
    });
});

describe ('transformToAbsPath', () => {
    it.only ('debería ser una función', ()  =>{
        expect (typeof transformToAbsPath).toBe ('function');
    });
    it.only ('deberia retornar dato tipo string', () => {
        expect (typeof transformToAbsPath ('.\\mi-ruta-relativa')) .toEqual ('string');
    });
    it.only ('debería retornar una ruta absoluta al ingresar una ruta relativa', () => {
        expect (transformToAbsPath ('.\\mi-ruta-relativa')) .toEqual (paths.normalize('D:\\PROYECTOS solange\\Markdown Links\\LIM008-fe-md-links\\mi-ruta-relativa'));
    });
});

describe ('recognizelflsFile' , () => {
    it('debería seruna función', () => {
        expect (typeof recognizelflsFile).toBe ('function');
    });
    it (' ')
})

