angular.module("MyFirstApp1",[])
.controller("FirstController1", function($scope, $http){
	$scope.posts=[];
	$scope.newPost={};
	$http.get("https://jsonplaceholder.typicode.com/posts")
	.then(function success(data)
		{		
			$scope.posts= data;
		},
		function error(err)
		{
			console.log(err);		
		}
	);
	$scope.addPost= function()
	{
		$http.post("https://jsonplaceholder.typicode.com/posts",{
			title: $scope.newPost.title,
			body:  $scope.newPost.body
		})
		.then(function success(data, status, headers, config){			
			$scope.posts.data.push($scope.newPost)
			$scope.posts.data={};
		})
	}
});

