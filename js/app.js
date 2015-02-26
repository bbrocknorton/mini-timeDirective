var app = angular.module("timeApp", []);

app.directive('showTime', function() {
	return {
		restrict: 'E',
		templateUrl: "./app/nav/nav.html",
		controller: "",
		scope: {},
		link: function($scope, element, attrs) {

		}
	}
});