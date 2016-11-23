"use strict";

app.controller("ItemListCtrl", function($scope, PeopleFactory){

	$scope.people = [];

	let getPeople = function(){
		PeopleFactory.getItemList().then(function(fbItems) {
			$scope.people = fbItems;
		});
	}

	getPeople();

	$scope.deletePerson = function(personId){
		console.log("clicked", personId);
		PeopleFactory.factoryDeletePerson(personId).then(function(response){
			getPeople();
		});
	};
})