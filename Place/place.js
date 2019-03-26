const axios = require('axios');

const GetLatLonPlace = async ( pAddress ) => {

  const encodeUrl = encodeURI( pAddress );
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
    headers: {'X-RapidAPI-Key': 'cc7841e5fcmsh0aac06b01e45434p16dbacjsn98e6086fe9ac'}
  });

//  instance.get().then( resp => console.log(resp.data.Results[0])).catch( err => console.log(err));
  const resp = await instance.get();

  if( resp.data.Results.length === 0){
    throw new Error( `Sorry we can not find any result by the ${ pAddress }`);
  }

  const data = resp.data.Results[0];

  const name = data.name;
  const lat = data.lat;
  const lon = data.lon;
  return { name, lat, lon }
}

module.exports = { GetLatLonPlace }
