var appName = "CongApp";
angular.module(appName).controller("app.login", ["$rootScope","$scope", function ($rootScope, $scope) {
    $scope.login = function () {
        $rootScope.$state.go("dashboard")
    }
}]);