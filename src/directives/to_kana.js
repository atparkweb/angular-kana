angular.module('atparkweb.kana').directive('toKana', ['kanaService', function (kanaService) {

    function linker(scope, element, attrs) {
        element.on('keyup', function (event) {
            var whichKana = scope.toKana;
            var value = element.val(),
                conversionFunction;

            switch(whichKana) {
                case 'hiragana':
                    conversionFunction = kanaService.toHiragana;
                    break;
                case 'katakana':
                    conversionFunction = kanaService.toKatakana;
                    break;
                default:
                    conversionFunction = kanaService.toHiragana;
                    break;
            }

            element.val(conversionFunction(value));
        });
    }

    return {
        link: linker,
        restrict: 'A',
        scope: {
            'toKana': '='
        }
    };
}])
