export const evaluatePath = (path) => {
    if (path.isAbsolute) return true;
    else return false;
    };
    
    export const transformToAbsPath = (path) => {
        const pathRelative = path;
        const pathAbsolute = 'C:/rutaAbsoluta/archivo.md';
    return pathAbsolute;
    };
    
    export const recognizeIfIsFile = (pathAbs) => {
    if (pathAbs) return true;
    else return false;
    };
    
    export const getFiles = (pathAbs) => {
    if (pathAbs) {
        const arrPath =  ['ruta1','ruta2'];
        return arrPath;
        }
    };
    
    export const getMDContent = (pathAbsolute) => {
        if(pathAbsolute) {
            const content = 'contenido MD';
            return content;
        }
    };
    
    export const convertMDToHtml = (content) => {
        if (content){
            const contentHtml = 'contenido HTML';
            return contentHtml;
        }
    };

    export const extractATagAttr = (htmlstring) => {
        if (htmlstring) {
            const attrLinks = {
                href:'link',
                text:'text',
                file:'path',
            };
            return attrLinks;
        }
    };
    
    export const createArrLinkObj = (attrLinks) => {
        if (attrLinks) {
            const arrObjInfLinks = [{
                href:'link',
                text:'text',
                file:'path',
            }];
            return arrObjInfLinks;
        }
    };