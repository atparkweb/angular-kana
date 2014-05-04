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

            if (!conversionFunction) {
                throw new Error('"to-kana" attribute value must be either "hiragana" or "katakana"');
            }

            element.val(conversionFunction(value));
        });
    }

    return {
        link: linker,
        restrict: 'A',
        scope: {
            'toKana': '@'
        }
    };
})