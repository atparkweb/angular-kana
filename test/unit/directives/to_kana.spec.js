describe('angular-kana: toKana directive', function () {
    var controller;

    beforeEach(function () {
        angular.mock.module('atparkweb.kana');
    });

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should have a scope', function () {
        expect(scope).toBeDefined();
    });

    // TODO: Implement unit tests for toKana directive
});
