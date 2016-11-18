"use strict";

app.controller("ContactCtrl", function($scope, PeopleFactory) {
	$scope.newContact = {};
	$scope.people = [];

	let getPeople = function(){
		PeopleFactory.getItemList().then(function(fbPeople) {
			$scope.people = fbPeople;
		});
	}
	getPeople();

	$scope.allPeople=function(){
		$scope.showListView = true;
	};
	$scope.newPerson=function(){
		$scope.showListView = false;	

	};

	$scope.addNewPerson = function(listPerson){
		$scope.newContact.isCompleted = false;
		PeopleFactory.postNewPerson($scope.newContact).then(function(personId){
			getPeople();
			$scope.newContact = {};
			$scope.showListView = true;	
		});
	};

	$scope.deleteContact = function(personId){
		console.log("delete clicked");
		PeopleFactory.deletePerson(personId).then(function(response){
			PeopleFactory.getPeople().then(function(peopleList){
				$scope.people = peopleList;
			});
		});
	};

});