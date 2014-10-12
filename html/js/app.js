/**
 * Main Module for the entire app
 *
 * Created by nick on 7/13/14.
 */

console.log('Loading app.js');

var resumeApp = angular.module('resumeApp', [
    'ngRoute',
    'resumeControllers'
]);

resumeApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/default', {
                templateUrl: 'partials/default.html',
                controller: 'bodyCtrl'
            })
            .otherwise({
                redirectTo: '/default'
            });

    }
]);
