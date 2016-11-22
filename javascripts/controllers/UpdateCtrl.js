"use strict";

app.controller("UpdateCtrl", function($scope, $routeParams, $location, PeopleFactory){
	$scope.newContact = {};
	let personId = $routeParams.id;

	PeopleFactory.getSingleItemForEdit(personId).then(function(onePerson){
		onePerson.id = personId;
		$scope.newContact = onePerson;
	});	

	$scope.addNewPerson = function(){
		PeopleFactory.editPerson($scope.newContact).then(function(response){
			$scope.newContact = {};
			$location.url("/people/list")
		})
	}
})