import {statsLinks, statLinksBroken, pathAbsMD} from '../src/models/stats.js';

describe('statsLinks', () => {
  it('debería ser igual a una función', () => {
    expect(typeof statsLinks).toBe('function');
  });
});
  

test('Debería retornar el total de links y cuantos de los links no se repiten', (done) => {
  statsLinks(pathAbsMD).then((respuesta) => {
    expect(respuesta).toEqual('Total : 3 Unique: 2');
    done();
  });
});

describe('statLinksBroken', () => {
  it('debería ser igual a una función', () => {
    expect(typeof statLinksBroken).toBe('function');
  });
});
  
test('Debería contar cuantos links son broken', (done) => {
  statLinksBroken(pathAbsMD).then((respuesta) => {
    expect(respuesta).toEqual('Broken: 1');
    done();
  });
});

