const axios = require('axios');

const getLugarLatLng =  async ( direccion ) =>{
  // transformamos la entrada del usuario para tratar los espacios en el nombre de las ciudades
  const encodeUlr = encodeURI(direccion);
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
    headers: {"X-RapidAPI-Key": "40dea629c8msh67272085731b8dap18deaajsn7b901a3994fd"}
  });

  const resp = await instance.get();

  if(resp.data.Results.length === 0){
    throw new Error(`No hay resultados para ${direccion}`);
  }

  const data = resp.data.Results[0];
  const dir = data.name;
  const lat = data.lat;
  const lng = data.lon;
  return {
    dir,
    lat,
    lng
  }

}

module.exports = {
  getLugarLatLng
}
