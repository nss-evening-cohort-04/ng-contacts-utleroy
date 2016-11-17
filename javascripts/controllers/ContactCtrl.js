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
});