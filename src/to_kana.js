var module = angular.module('ap.kana', []);

module.directive('toKana', function (kanaService) {

    function linker(scope, element, attrs) {
        element.on('keyup', function () {
            var value = element.val();
            element.val(kanaService.toHiragana(value));
        });
    }

    return {
        link: linker,
        restrict: 'AC'
    };
})