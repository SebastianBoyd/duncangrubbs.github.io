/**
 * Created by Max on 5/15/2015.
 */

angular.module('myapp', [
    'ngRoute'
])

    .directive('nav', function() {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: './angular/templates/nav.html'
        };
    })

    .controller('navCtrl',['$scope', '$location',  function ($scope, $location)
    {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }])

    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: './angular/templates/home.html'

            })
            .when('/about', {
                templateUrl: './angular/templates/about.html'


            })
            .when('/contact', {
                templateUrl: './angular/templates/contact.html'


            })
            .otherwise({
                redirectTo: '/'
            });
    }]);