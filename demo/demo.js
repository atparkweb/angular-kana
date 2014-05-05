var module = angular.module('demo', ['ap.kana']);

module.controller('DemoController', function ($scope) {
    $scope.whichKana = 'hiragana';
});
