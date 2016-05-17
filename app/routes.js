congApp.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "app/account/login.html",
            data: { pageTitle: "登陆" },
            controller: "app.login",
            resolve: {
                deps: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: "CongApp",
                            serie: true,
                            insertBefore: "#ng_load_plugins_before",
                            files: [
                                "app/account/login.css",
                                "app/account/login.js"
                            ]
                        });
                    }
                ]
            }
        })
        .state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/dashboard/dashboard.html",
            data: { pageTitle: "dashboard" },
            controller: "app.dashboard",
            resolve: {
                deps: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: "CongApp",
                            serie: true,
                            insertBefore: "#ng_load_plugins_before",
                            files: [
                                "app/dashboard/dashboard.css",
                                "app/dashboard/dashboard.js"
                            ]
                        });
                    }
                ]
            }
        })
}]);