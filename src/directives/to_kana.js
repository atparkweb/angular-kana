angular.module('atparkweb.kana').directive('toKana', function (kanaService) {

    function linker(scope, element, attrs) {
        var whichKana = scope.toKana;

        element.on('keyup', function (event) {
            var keyCode = event.keyCode,
                value = element.val(),
                conversionFunction;

            if (keyCode < 65 || keyCode > 90) {
                return;
            }

            switch(whichKana) {
                case 'hiragana':
                    conversionFunction = kanaService.toHiragana;
                    break;
                case 'katakana':
                    conversionFunction = kanaService.toKatakana;
                    break;
                default:
                    conversionFunction = null;
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
            'toKana': '='
        }
    };
})
