 angular.module("ToDoList",["LocalStorageModule"])
 .controller("ToDoController", function($scope, localStorageService){
	 if(localStorageService.get("angular-todo-list")){
		 $scope.todo=localStorageService.get("angular-todo-list");
	 }
	 else{
			$scope.todo=[];
	 }
	 $scope.todo= [];
	 /*
	 {
		 descripcion:'terminar',
		 fecha:	'3-03-2020'
		 }
	 */
	 // $scope.$watch(function(){
		 // return $scope.newActv;
	 // }, function(newVal, oldVal){
		 // console.log(newVal, oldVal);
		 
	 // });
	 	 $scope.$watchCollection("todo", function(newVal, oldVal){
			localStorageService.set("angular-todo-list",$scope.todo);
	 });
	 $scope.addActv=function(){
		 $scope.todo.push($scope.newActv);
		 $scope.newActv={};
		 
	 }
	 $scope.clean=function(){
		 $scope.todo=[];		
	 }
		 
 });