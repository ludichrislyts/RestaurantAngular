restaurantsList.controller('RestaurantsCtrl', function RestaurantsCtrl($scope){
	$scope.restaurants = [];
	$scope.addRestaurant = function(){
		$scope.restaurants.push({ name: 		$scope.restaurantName,
															location: $scope.restaurantLocation,
															cuisine: 	$scope.restaurantCuisine,
															rating: 	$scope.restaurantRating });
		$scope.restaurantName = null;
		$scope.restaurantLocation = null;
		$scope.restaurantCuisine = null;
		$scope.restaurantRating = null;

	}
	$scope.deleteRestaurant = function(restaurant){
		var index = $scope.restaurants.indexOf(restaurant);
		$scope.restaurants.splice(index, 1);
	}

	// var restaurant = {
	// 	name:
	// 	description:
	// };


});
