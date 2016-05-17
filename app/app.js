var congApp = angular.module("CongApp", ["ui.router", "oc.lazyLoad"]);
var appName = "CongApp";

congApp
    .run(["$rootScope", "$state", function ($rootScope, $state) {
        $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
            $rootScope.previousState = from;
            $rootScope.previousParams = fromParams;
        });
        $rootScope.$state = $state; // state to be accessed from view
    }])
    .config(["$controllerProvider", function ($controllerProvider) {
        $controllerProvider.allowGlobals();
    }]);