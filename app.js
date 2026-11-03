
var app = angular.module('myApp', []);
//parent controller
app.controller('collegecontroller',function($scope){
    $scope.collegename="abc college";
});
//child controller
app.controller('studentcontroller', function($scope)
{
    $scope.name="Sadvi",
    $scope.department= "Information Science and Engineering";
}
);