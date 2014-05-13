#Angular Kana

An Angular directive that transliterates rōmaji input text to kana.

Based on [Hepburn](https://github.com/lovell/hepburn) inspired by [WaniKani](http://wanikani.com)

# Basic Usage

After including Angular and the angular-kana.js script file, inject the module in your
module declaration:

    angular.module('app', ['atparkweb.kana']);

Attach the directive attribute to any input field with type=text:

    <!-- transliterate to hiragana -->
    <input to-kana="'hiragana'" type="text" />


    <!-- transliterate to katakana -->
    <input to-kana="'katakana'" type="text" />


    <!-- transliterate mode passed in from scope -->
    // $scope.whichKana = 'hiragana' (or 'katakana')
    <input to-kana="whichKana" type="text" />


Attribute value can be either "hiragana" or "katakana". "hiragana" is the default value if the attribute is empty.
