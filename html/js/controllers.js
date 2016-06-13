/**
 * Created by nick on 6/22/14.
 */

//console.log('Loading controllers.js');

var resumeControllers = angular.module('resumeControllers', ['resumeData']);

resumeControllers.controller('bodyCtrl', function ($scope, ResumeData) {
    $scope.resume = ResumeData.query(function() {
        $scope.current_date = Date.now();
    });
});

resumeControllers.controller('headerCtrl', function ($scope, ResumeData) {
    var resume = ResumeData.query(function() {
        $scope.name = resume.personal.name;
    });
});