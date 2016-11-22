"use strict";

app.controller("NavCtrl", function($scope) {
	$scope.navItems=[
	{
		name:"Logout",
		url: "#/logout"
	},
	{
		name:"All People",
		url: "#/people/list"
	},
	{
		name:"New Person",
		url: "#/people/new"
	}
	];
});