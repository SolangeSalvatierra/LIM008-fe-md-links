import{
    evaluatePath,
    transformToAbsPath,
    recognizelflsFile,
} from '../src/models/links.js';

const inputTrue = 'C:\\mi-ruta-absoluta'; 
const inputFalse = '.\\mi-ruta-relativa';

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
    it.only ('debería retornar  ruta absoluta a partir de ruta relativa', () => {
        expect (transformToAbsPath('.\\mi-ruta-relativa')) .toEqual (paths.normalize('C:\\mi-ruta-absoluta'))
    });
});

describe ('recognizelflsFile' , () => {
    it('debería seruna función', () => {
        expect (typeof recognizelflsFile).toBe ('function');
    });
    it (' ')
})

