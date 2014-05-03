var module = angular.module('ap.kana', []);

module.directive('toKana', function () {

    function linker(scope, element, attrs) {
        element.on('keyup', function () {
            console.log(element.value);
        });
    }

    function controller($scope) {

    }

    return {
        link: linker,
        controller: controller,
        restrict: 'AC'
    };
})