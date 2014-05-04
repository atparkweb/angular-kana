var module = angular.module('ap.kana', []);

module.directive('toKana', function (kanaService) {

    function linker(scope, element, attrs) {
        var whichKana = scope.toKana;

        // For adding small delay to prevent inaccurate translation (i.e. 'na' becoming 'んあ')
        var keyInterval;

        element.on('keyup', function (event) {
            var keyCode = event.keyCode,
                value = element.val(),
                conversionFunction;

            clearInterval(keyInterval);

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
                    console.log('error');
                    break;
            }

            if (!conversionFunction) {
                throw new Error('"to-kana" attribute value must be either "hiragana" or "katakana"');
            }

            keyInterval = setInterval(function () {
                element.val(conversionFunction(value));
            }, 300);
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