const fetch = require('node-fetch')
const arrayDelinks = [
    'https://github.com/Frontendpe',
    'https://www.youtube.com/'
    ,'http://algo.com/2/3/'
]
const validarStatus = (arrLinks) => {
    const arrayDePromises = arrLinks.map(link => fetch(link));
    return Promise.all(arrayDePromises)
    .then((response)=>response.map((objRespuesta)=>{
        const obj = {
            status: objRespuesta.status,
        }
        if (objRespuesta.status === 200 ) {
            // obj.statustext = objRespuesta.statustext;
            obj.statustext= 'ok';
        }
        else{
            obj.statustext= 'FAIL';
        }
        return obj
    }));
}
validarStatus(arrayDelinks)
.then((respuesta)=>{
    console.log(respuesta);
    
});