#Angular Kana

An Angular directive that transliterates roumaji input text to kana.

Based on [Hepburn](https://github.com/lovell/hepburn) inspired by [WaniKani](http://wanikani.com)

# Basic Usage

After including Angular and the angular-kana.js script file, inject the module in your
module declaration:

    angular.module('app', ['atparkweb.kana']);

Attach the directive attribute to any input field with type=text:

    <input to-kana="hiragana" type="text" />

Attribute value can be either "hiragana" or "katakana". "hiragana" is the default value.
