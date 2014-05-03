var module = angular.module('ap.kana', []);

module.directive('toKana', function (kanaService) {

    function linker(scope, element, attrs) {
        var whichKana = scope.toKana;

        element.on('keyup', function () {
            var value = element.val();
            var conversionFunction;

            switch(whichKana) {
                case 'hiragana':
                    conversionFunction = kanaService.toHiragana;
                    break;
                case 'katakana':
                    conversionFunction = kanaService.toKatakana;
                    break;
                default:
                    console.log('error');
                    break;
            }

            if (conversionFunction) {
                element.val(conversionFunction(value));
            } else {
                throw new Error('No conversion function');
            }

        });
    }

    return {
        link: linker,
        restrict: 'AC',
        scope: {
            'toKana': '@'
        }
    };
})