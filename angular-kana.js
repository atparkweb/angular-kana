angular.module('atparkweb.kana', []);

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

// Based on node-bulk-replace (https://github.com/jeresig/node-bulk-replace/blob/master/bulk-replace.js)
angular.module('atparkweb.kana').factory('bulkReplace', function () {
    return {
        replace: function (str, regex, map) {
            if (arguments.length === 2) {
                map = regex;
                regex = new RegExp(Object.keys(map).join(), "ig");
            }

            return str.replace(regex, function (all) {
                if (all in map) {
                    return map[all];
                }

                return all;
            });
        }
    };
});


// Based on hepburn (https://github.com/lovell/hepburn)
angular.module('atparkweb.kana').factory('kanaService', ['bulkReplace', function (bulkReplace) {

    var hiraganaMonographs = {
        "a": "あ", "i": "い", "u": "う", "e": "え", "o": "お",
        "ka": "か", "ki": "き", "ku": "く", "ke": "け", "ko": "こ",
        "sa": "さ", "shi": "し", "su": "す", "se": "せ", "so": "そ",
        "ta": "た", "chi": "ち", "tsu": "つ", "te": "て", "to": "と",
        "na": "な", "ni": "に", "nu": "ぬ", "ne": "ね", "no": "の",
        "ha": "は", "hi": "ひ", "fu": "ふ", "he": "へ", "ho": "ほ",
        "ma": "ま", "mi": "み", "mu": "む", "me": "め", "mo": "も",
        "ya": "や", "yu": "ゆ", "yo": "よ",
        "ra": "ら", "ri": "り", "ru": "る", "re": "れ", "ro": "ろ",
        "wa": "わ", "wi": "ゐ", "we": "ゑ", "wo": "を", "nn": "ん",
        "ga": "が", "gi": "ぎ", "gu": "ぐ", "ge": "げ", "go": "ご",
        "za": "ざ", "ji": "じ", "zu": "ず", "ze": "ぜ", "zo": "ぞ",
        "da": "だ", "dj": "ぢ", "dz": "づ", "de": "で", "do": "ど",
        "ba": "ば", "bi": "び", "bu": "ぶ", "be": "べ", "bo": "ぼ",
        "pa": "ぱ", "pi": "ぴ", "pu": "ぷ", "pe": "ぺ", "po": "ぽ"
    };

    var hiraganaDigraphs = {
        "kya": "きゃ", "kyu": "きゅ", "kyo": "きょ",
        "sha": "しゃ", "shu": "しゅ", "sho": "しょ",
        "cha": "ちゃ", "chu": "ちゅ", "cho": "ちょ",
        "nya": "にゃ", "nyu": "にゅ", "nyo": "にょ",
        "hya": "ひゃ", "hyu": "ひゅ", "hyo": "ひょ",
        "mya": "みゃ", "myu": "みゅ", "myo": "みょ",
        "rya": "りゃ", "ryu": "りゅ", "ryo": "りょ",
        "gya": "ぎゃ", "gyu": "ぎゅ", "gyo": "ぎょ",
        "ja": "じゃ", "ju": "じゅ", "jo": "じょ",
        "bya": "びゃ", "byu": "びゅ", "byo": "びょ",
        "pya": "ぴゃ", "pyu": "ぴゅ", "pyo": "ぴょ"
    };

    var katakanaMonographs = {
        "a": "ア", "i": "イ", "u": "ウ", "e": "エ", "o": "オ",
        "ka": "カ", "ki": "キ", "ku": "ク", "ke": "ケ", "ko": "コ",
        "sa": "サ", "shi": "シ", "su": "ス",  "se": "セ", "so": "ソ",
        "ta": "タ", "chi": "チ", "tsu": "ツ", "te": "テ", "to": "ト",
        "na": "ナ", "ni": "ニ", "nu": "ヌ", "ne": "ネ", "no": "ノ",
        "ha": "ハ", "hi": "ヒ", "fu": "フ", "he": "ヘ", "ho": "ホ",
        "ma": "マ", "mi": "ミ", "mu": "ム", "me": "メ", "mo": "モ",
        "ya": "ヤ", "yo": "ヨ", "yu": "ユ",
        "ra": "ラ", "ri": "リ", "ru": "ル",  "re": "レ", "ro": "ロ",
        "wa": "ワ", "wi": "ヰ", "we": "ヱ", "wo": "ヲ", "nn": "ン",
        "ga": "ガ", "gi": "ギ", "gu": "ぐ", "ge": "ゲ", "go": "ゴ",
        "za": "ザ", "ji": "ジ", "zu": "ズ", "ze": "ゼ", "zo": "ゾ",
        "da": "ダ", "dji": "ヂ", "dzu": "ヅ", "de": "デ", "do": "ド",
        "ba": "バ", "bi": "ビ", "bu": "ブ", "be": "ベ", "bo": "ボ",
        "pa": "パ", "pi": "ピ", "pu": "プ", "pe": "ペ", "po": "ポ"
    };

    var katakanaDigraphs = {
        "kyo": "キョ", "kyu": "キュ", "kya": "キャ",
        "sho": "ショ", "shu": "シュ", "sha": "シャ",
        "cho": "チョ", "chu": "チュ", "cha": "チャ",
        "nyo": "ニョ", "nyu": "ニュ", "nya": "ニャ",
        "hyo": "ヒョ", "hyu": "ヒュ", "hya": "ヒャ",
        "myo": "ミョ", "myu": "ミュ", "mya": "ミャ",
        "ryo": "リョ", "ryu": "リュ", "rya": "リャ",
        "gyo": "ギョ", "gyu": "ギュ", "gya": "ギャ",
        "jo": "ジョ", "ju": "ジュ", "ja": "ジャ",
        "byo": "ビョ", "byu": "ビュ", "bya": "ビャ",
        "pyo": "ピョ", "pyu": "ピュ", "pya": "ピャ"
    };

    var hiraganaMap = {};

    Object.keys(hiraganaMonographs).forEach(function (key) {
        var value = hiraganaMonographs[key];

        if (!(key in hiraganaMap)) {
            hiraganaMap[key] = value;
        }
    });

    Object.keys(hiraganaDigraphs).forEach(function (key) {
        var value = hiraganaDigraphs[key];

        if (!(key in hiraganaMap)) {
            hiraganaMap[key] = value;
        }
    });

    var hiraganaRegex = new RegExp(Object.keys(hiraganaMap).sort(function(a, b) {
        return b.length - a.length;
    }).join("|"), "g");

    var katakanaMap = {};

    // TODO: Make IE8 compatible
    Object.keys(katakanaMonographs).forEach(function (key) {
        var value = katakanaMonographs[key];

        if (!(key in katakanaMap)) {
            katakanaMap[key] = value;
        }
    });

    // TODO: Make IE8 compatible
    Object.keys(katakanaDigraphs).forEach(function (key) {
        var value = katakanaDigraphs[key];

        if (!(key in katakanaMap)) {
            katakanaMap[key] = value;
        }
    });


    var katakanaRegex = new RegExp(Object.keys(katakanaMap).sort(function(a, b) {
        return b.length - a.length;
    }).join("|"), "g");


    return {
        toHiragana: function (str) {
            // All conversion is done in lower-case
            str = str.toLowerCase();

            // Double consonant
            str = str.replace(/([^aeioun])\1/g, "っ$1");

            // Transliterate double 'n'
            str = str.replace(/nn/g, "ん");

            // Transliterate 'n' followed by consonant
            str = str.replace(/n([^aeiouny])/g, "ん$1");

            // Transliteration
            str = bulkReplace.replace(str, hiraganaRegex, hiraganaMap);

            return str;
        },

        toKatakana: function (str) {
            // All conversion is done in lower-case
            str = str.toLowerCase();

            // Double consonant
            str = str.replace(/([^aeioun])\1/g, "ッ$1");

            // Transliterate double 'n'
            str = str.replace(/nn/g, "ン");

            // Transliterate 'n' followed by consonant
            str = str.replace(/n([^aeiouny])/g, "ン$1");

            // Transliterate hyphen to long dash
            str = str.replace(/-/g, "ー");

            // Transliteration
            str = bulkReplace.replace(str, katakanaRegex, katakanaMap);

            return str;
        },

		getHiraganaMonographs: function () {
			return hiraganaMonographs;
		},

		getHiraganaDigraphs: function () {
			return hiraganaDigraphs;
		},

		getKatakanaMonographs: function () {
			return katakanaMonographs;
		},

		getKatakanaDigraphs: function () {
			return katakanaDigraphs;
		}
    };
}]);
