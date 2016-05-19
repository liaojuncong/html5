congApp.directive("ngSpinnerBar", [
    "$rootScope",
    function ($rootScope) {
        return {
            link: function (scope, element, attrs) {
                element.addClass("hide");
                $rootScope.$on("$stateChangeStart", function () {
                    element.removeClass("hide");
                });
                $rootScope.$on("$stateChangeSuccess", function () {
                    element.addClass("hide");
                    // $("body").removeClass("page-on-load");
                });
                $rootScope.$on("$stateNotFound", function () {
                    element.addClass("hide");
                });
                $rootScope.$on("$stateChangeError", function () {
                    element.addClass("hide");
                });
            }
        };
    }
])
    .directive("a", function () {
        return {
            restrict: "E",
            link: function (scope, elem, attrs) {
                if (attrs.ngClick || attrs.href === "" || attrs.href === "#") {
                    elem.on("click", function (e) {
                        e.preventDefault();
                    });
                }
            }
        };
    })
    .directive("dropdownMenuHover", function () {
        return {
            link: function (scope, elem) {
                elem.dropdownHover();
            }
        };
    });
