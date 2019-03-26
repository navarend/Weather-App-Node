
const place = require ('./Place/place');
const weather = require ('./Weather/weather');

const argv = require('yargs').options({
  address:{
    alias: 'd',
    desc: 'address of the city to get the weather',
    deman: true
  }
}).argv;

//console.log(argv.address);

//place.GetLatLonPlace(argv.address).then( resp => console.log(resp)).catch( console.log());

//weather.GetWeather(40.750000,-74.000000).then( resp => console.log(resp)).catch( resp => console.log(resp));


const GetInfoWeather = async ( pAddress ) => {
  try {
    const infoPlace = await place.GetLatLonPlace(pAddress);
    const infoWeather = await weather.GetWeather(infoPlace.lat, infoPlace.lon);
    return `The weather of the city ${pAddress}: is ${infoWeather.temp}`;
  } catch (e) {
    return `Sorry we can not find the weather of the place: ${ pAddress }`;
  }
}


GetInfoWeather( argv.address ).then( resp => console.log(resp)).catch( console.log());
