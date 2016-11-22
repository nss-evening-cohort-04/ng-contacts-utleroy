"use strict";

app.controller("EditCtrl", function($scope, $routeParams, ItemFactory){
	$scope.selectedItem = {};
	let personId = $routeParams.id;
	ItemFactory.getSingleItemForEdit(personId).then(function(onePerson){
		onePerson.id = personId;
		$scope.selectedItem = onePerson;
	});
});