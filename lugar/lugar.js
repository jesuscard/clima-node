const axios = require('axios');

const getLugarLatLng = async (direccion )=>{
    const encodeUlr = encodeURI(direccion)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'x-rapidapi-key': '0fce9f1f06mshe2df82f824de509p1d49f8jsnb15342c0a832' }
    });

    const resp = await instance.get();

    if(resp.data.Results.length === 0){
        throw new Error(`No hay resultado para ${direccion}`)
    }

    let data = resp.data.Results[0]


    return {
        direccion: data.name,
        lat: data.lat,
        lgn: data.lon
    }
}

module.exports = {
    getLugarLatLng
}
