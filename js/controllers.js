/**
 * Created by nick on 6/22/14.
 */

var resumeApp = angular.module('resumeApp', []);

resumeApp.controller('resumeCtrl', function($scope, $http) {
    $http.get('data.json').success(function(data) {
        $scope.resume = data;
    })
});