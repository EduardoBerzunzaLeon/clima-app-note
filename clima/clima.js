const axios = require('axios');

const getClima = async (lat, lng) => {
	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lan}&lon=${lng}&appid=4aaa1d567dd6aa26fff5683727893a17&units=metric`)
	return resp.data.main.temp;
}

module.exports = { getClima };