
var app = angular.module('myApp', []);


app.controller('MyController', function($scope) {
    
    
    $scope.student = {
        name: "Alex Mercer",
        rollNumber: "UG-2026-8942",
        course: "Computer Science & Engineering",
        status: "Active"
    };
    
});