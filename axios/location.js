const axios = require("axios");

const getLocation = async city => {
  const encodeURL = encodeURI(city);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
    headers: {
      "x-rapidapi-key": "8a3e644f52msh2ec6d06beebcdcep1b42ccjsn4c1c0b2d94b4"
    }
  });

  const resp = await instance.get();

  if (resp.data.Results.length === 0) throw new Error(`No results for ${city}`);

  const data = resp.data.Results[0];
  const location = data.name;
  const lat = data.lat;
  const lon = data.lon;

  return {
    location,
    lat,
    lon
  };
};

module.exports = { getLocation };
