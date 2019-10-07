const axios = require("axios");

const getWeather = async (lat, lon) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cdce26b8335ca17210a83d32bec597e0&units=metric`
  );
  return resp.data.main.temp;
};

module.exports = { getWeather };
