const axios = require('axios');


const getClima = async (lat, lng) =>{

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng}&appid=143abf2608429438defff31e5a1e5e1c&units=metric`)
      return res.data.main.temp;

}

module.exports = { getClima }
