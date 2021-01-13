
//FUNCIONES UTILES
export const tiposdocumento = [
	{ name: 'DNI', value: '1' },
	{ name: 'Carnet de extranjería', value: '2' },
];


export const es = {
	firstDayOfWeek: 1,
	dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
	dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
	dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
	monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
	monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
	today: "Hoy",
	clear: "Claro"
};

export function isDefined(obj: any) {
	return obj !== undefined && obj !== null;
}

export function dateFormat(date: string) {
	let options = {
	  year: "numeric",
	  month: "2-digit",
	  day: "2-digit",
	  timeZone: "UTC"
	};
	return new Date(date).toLocaleString("es-ES", options);
};

export function clearStorage() {
	localStorage.clear();
}