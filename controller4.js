 angular.module("mainModule",[]) 
		.filter("RemoveHtml", function(){
			return function (texto){
				
				return String(texto).replace(/<[^>]+>/gm, '');
			}
		})
		.controller("filtersController", function($scope){
			$scope.mi_html={};
			$scope.mi_html.title="hola mundo";
			$scope.mi_html.body="hola ";
			$scope.costo=2000;
			
		});