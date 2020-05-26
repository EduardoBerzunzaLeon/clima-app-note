const axios = require('axios').default;


const getLugarLatLng = async (dir) => {

	const encodeUlr = encodeURI( dir );

	const instance = axios.create({
	baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
	  headers: {
	  	'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
	  	'x-rapidapi-key': 'd2a0e83676msheb4c91262cf5cd4p1b23d0jsnd264f0a3cfff',
	  	'useQueryString': true
	  }
	});

	const resp = await instance.get();

	if( resp.data.Results.length === 0){
		throw new Error(`No hay resultados para ${dir}`);
	}

	const data = resp.data.Results[0];
	const direccion = data.name;
	const lat = data.lat;
	const lng = data.lon;

	return {
		direccion,
		lat, 
		lng
	}
}

module.exports = { getLugarLatLng };

