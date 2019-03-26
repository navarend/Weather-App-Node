const axios = require('axios');

const GetWeather = async( pLat, pLong ) => {

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ pLat }&lon=${ pLong }&appid=0a09a395d71007bfc929852bc96ddb23&units=metric`)

  return resp.data.main;
}


module.exports = { GetWeather }
