// Definición de la clase Apuesta: `quien` = código de la persona que hace la apuesta `local, visitante` = goles del local y del visitante
exports.Apuesta = function (quien,local,visitante) {
    this.local = local;
    this.visitante= visitante;
    this.quien= quien;
    this.as_string = as_string;
    this.goles_string = goles_string;
}

// Devuelve la apuesta como una cadena 
function as_string() {
    return this.quien + ": " + this.local + " - " + this.visitante;
}

// Devuelve los goles como una cadena
function goles_string() {
    return this.visitante + " ";
}

var apuesta = require("./Apuesta.js"),
assert= require("assert");

var nueva_apuesta = new apuesta.Apuesta('Polopos','Alhama','2-3');
assert(nueva_apuesta, "Creada apuesta");
assert.equal(nueva_apuesta.as_string(), "Polopos: Alhama - 2-3","Creado");

var apuesta2 = new apuesta.Apuesta('Granada','Sevilla','1-0');
assert(apuesta2, "Creada apuesta");
assert.equal(apuesta2.as_string(), "Granada: Sevilla - 1-0","Creado");

var apuesta3 = new apuesta.Apuesta('Granada','Sevilla','1-0');
assert(apuesta3, "Creada apuesta");
assert.equal(apuesta3.as_string(), "Granada: Sevilla - 1-0","Creado");

assert.deepStrictEqual(apuesta2, apuesta3);
assert.notDeepStrictEqual(nueva_apuesta, apuesta2);