//FUNCIONES

function sumar (a = 2, b = 2) {
	return a+b
}

let sumarOtra = function (a = 2, b = 2) {
	return a+b
}


console.log(sumar (3,6))
console.log(sumarOtra (3,6))


//ES6: Arrow Functions

//let sumarArrow = function (a = 2, b = 2) => {return a+b;} ¡se puede resumir más!

let sumarArrow = (a = 2, b = 2) =>  a + b //Si solo tiene una linea nos ahorramos las llaves, el function  y el return

console.log(sumarArrow(3,6))


/*
Argumentos y parametros
Declaracion: parámetros (reales)
Invocación: parámetros formales o argumentos
Valores y referencias de los argumentos
*/

let user = {nombre:'Pepe', codigo:'007'}

cambiarCodigo = function (obj){
	obj.codigo = '008'
}

cambiarCodigo(user)
console.log(user)

//ES6: valores por defecto

function calcularPrecio(num, iva=1.22){
	return num*iva;
}

console.log(calcularPrecio(12)) //si no se le pasa el parámetro coge el que va por defecto
console.log(calcularPrecio(12,1.10))


//Parámetros sobrentes
console.log(sumarArrow(3,5,6,7)) //como no sabe que hacer con ellos los ignora


//Parámetros insuficientes
console.log(sumarArrow(3))



//ES6: spread operator

function sumatorio(...aDatos){ //Se utiliza cuando no sabe cuántos parámetros va a recibir
	let total = 0;
	aDatos.forEach(dato => total += dato)
	return total
}
console.log(sumatorio(2,2,2,2))


//ES6: Desestructuración


function usuario({nombre, codigo}){
	console.log(`accediendo al usuario ${nombre}, de código ${codigo}`)
}
usuario({nombre:'Pepe', codigo: '007'})

