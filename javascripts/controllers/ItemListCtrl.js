"use strict";

app.controller("ItemListCtrl", function($scope, PeopleFactory){

	$scope.people = [];

	let getPeople = function(){
		ItemFactory.getItemList().then(function(fbItems) {
			$scope.people = fbItems;
		});
	}

	getPeople();

	$scope.deletePerson = function(personId){
		console.log("clicked");
		PeopleFactory.deletePerson(personId).then(function(response){
			getPeople();
		});
	};
})