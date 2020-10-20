var assert = require("assert"),
apuesta = require(__dirname+"/Apuesta.js");

describe('Apuesta', function(){
	// Testea que se haya cargado bien la librería
	describe('Carga', function(){
	it('should be loaded', function(){
		assert(apuesta, "Cargado");
	});

	});
	describe('Crea', function(){
	it('should create apuestas correctly', function(){
		var nueva_apuesta = new apuesta.Apuesta('Polopos','Alhama','2-3');
		assert.equal(nueva_apuesta.as_string(), "Polopos: Alhama - 2-3","Creado");
	});
	});
	describe('Goles', function(){
	it('should show goles correctly', function(){
		var apuesta2 = new apuesta.Apuesta('Granada','Sevilla','1-0');
		assert.equal(apuesta2.goles_string(), "1-0");
	});
	});
});