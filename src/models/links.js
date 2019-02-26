let paths = require('path');

export const evaluatePath = (path) => 
paths.isAbsolute(path);

export const transformToAbsPath = (path) => 
paths.resolve(path);

    
    export const recognizelflsFile = (pathAbsolute) => {
        if (pathAbsolute) return true;
        else return false;
    }
    
    export const getMDContent = (pathAbsolute) => {
        if (pathAbsolute) {
            const contMD = 'contenido MD';
            return contMD;
        }
    }
    
