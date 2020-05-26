
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
	direccion: {
		alias: 'd',
		desc: 'Dirección de la ciudad para obtener el clima',
		demand: true
	}
}).argv;

lugar.getLugarLatLng(argv.direccion).then(console.log);


const getInfo =  async (dir) => {

	try{	
		const lugar =  await lugar.getLugarLatLng(dir);
		const clima = await clima.getClima(lugar.lan, lugar.lng);

		return `El clima de ${ dir } es de ${ clima } c° `;
	}catch(e){
		return `No se pudo determinar el clima de ${dir}`;
	}

}

getInfo(argv.direccion).then(console.log)
					   .catch(console.log);