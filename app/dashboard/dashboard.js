var appName = "CongApp";
angular.module(appName).controller("app.dashboard", ["$rootScope","$scope", function ($rootScope, $scope) {
    $scope.today = new Date();
}]);