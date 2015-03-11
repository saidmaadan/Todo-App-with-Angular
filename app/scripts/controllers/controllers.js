(function(){
	"use strict";

var app.angular.module('todo');

app.controller("TodoController", ["$scope", "$filter", TodoController]);

function TodoController($scope, $filter){
	$scope.newtask = '';
	$scope.pendingCount = 3;
	$scope.tasklists = [
	{description: "My Hotel reservation", done: false},
	{description: "Holliday trip to UK", done: false},
	{description: "Upcoming interview", done: false},
	{description: "Hackaton Meetup", done:false}
];

$scope.addTask = function(){
	$scope.tasklists.push({description: $scope.newtask, done:false});
	$scope.newtask = nil;
};

$scope.remove = function(index){
	$scope.tasklists.splice(index, 1);
};

$scope.$watch('tasklists', function(){
	$scope.pendingCount = $filter('filter')($scope.tasklists, {done: false}).length;
}, true)

$scope.clearCompleted = function(){
	$scope.tasklists = $filter('filter')($scope.tasklists, {done:false});
}

};
});