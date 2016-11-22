"use strict";

app.controller("ItemNewCtrl", function($scope, $location, PersonFactory){
	$scope.newContact = {};

	$scope.addNewPerson = function(listPerson){
		$scope.newContact.isCompleted = false;
		PeopleFactory.postNewPerson($scope.newContact).then(function(personId){
			getPeople();
			$scope.newContact = {};
			$scope.showListView = true;	
		});
	};
});