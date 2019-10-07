const { getLocation } = require("./axios/location");
const { getWeather } = require("./axios/weather");

const { argv } = require("yargs").options({
  city: {
    alias: "c",
    desc: "Enter a city to get its current temperature",
    demand: true
  }
});

const getInfo = async city => {
  console.log(city);
  try {
    const coord = await getLocation(city);
    const temp = await getWeather(coord.lat, coord.lon);
    return `The current temperature in ${coord.location} is the ${temp}.`;
  } catch (e) {
    return `Unable to find ${city}, ${e}`;
  }
};

getInfo(argv.city)
  .then(resp => console.log(resp))
  .catch(err => console.log(err));
