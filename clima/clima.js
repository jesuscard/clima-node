const axios = require('axios');

const getClima = async  (lat, lgn) =>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgn}&appid=a25c7118595d8057e029b0e0fb3c86bd`)
         
    return resp.date.main.temp;
}

module.exports = {
    getClima
}