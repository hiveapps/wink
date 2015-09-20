var wink = angular.module('wink.directives', []);

//Flipper Directives
wink.directive("flipper", function() {
    return {
        restrict: "E",
        template: "<div class='flipper' ng-transclude ng-class='{ flipped: flipped }'></div>",
        transclude: true,
        scope: {
            flipped: "="
        }
    };
});

wink.directive("front", function() {
    return {
        restrict: "E",
        template: "<div class='front tile' ng-transclude></div>",
        transclude: true
    };
});

wink.directive("back", function() {
    return {
        restrict: "E",
        template: "<div class='back tile' ng-transclude></div>",
        transclude: true
    }
});