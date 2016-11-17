"use strict";

app.factory("PeopleFactory", function($q, $http, FIREBASE_CONFIG) {
	
	var getItemList = function(){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/people.json`)
			.success(function(response){
				let people = [];
				console.log("json people", response)
				Object.keys(response).forEach(function(key){
					response[key].id = key;
					people.push(response[key]);
				})
				resolve(people);
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		});

	};
	return {getItemList:getItemList};
});