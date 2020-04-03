angular.module("MyFirstApp",[])
.controller("FirstController",["$scope", function(m){
	m.nombre="yura";
	m.nuevoComentario = {};
	m.comentarios = 
	[
		{
			comentario:"Bueno", 
			username:"user1"
		},
		{
			comentario:"Malo", 
			username:"user2"
		},
	];
	m.agregarComentario= function(){
		m.comentarios.push(m.nuevoComentario);
		m.nuevoComentario={};
	}
}]);

