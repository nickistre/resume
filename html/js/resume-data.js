/**
 * Created by nick on 6/7/16.
 */

var resumeData = angular.module('resumeData', ['ngResource']).
    factory('ResumeData', function($resource) {
        return $resource('data.json', {}, {
            query: {
                method: 'GET',
                cache: true
            }
        });
    });