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

	var deletePerson = function(personId){
		return $q(function(resolve, reject){
			$http
			.delete(FIREBASE_CONFIG + personId)
			.success(function(objectFromFirebase){
				resolve(objectFromFirebase);
			});
		});
	};

	var postNewPerson = function(newPerson){
		return $q((resolve, reject)=>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/people.json`, 
				JSON.stringify({
					firstName: newPerson.firstName,
					lastName: newPerson.lastName,
					phoneNumber: newPerson.phoneNumber
				})
				)
			.success(function(postResponse){
				resolve(postResponse)
			})
			.error(function(postError){
				reject(postError);
			});
		});
	};
	return {getItemList:getItemList, postNewPerson:postNewPerson, deletePerson:deletePerson};
});