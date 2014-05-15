describe('angular-kana: toKana directive', function () {
    var scope, html, element, isolateScope;

    beforeEach(function () {
        angular.mock.module('atparkweb.kana');
    });

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should have a scope', function () {
        expect(scope).toBeDefined();
    });

    describe('with string parameters', function () {
        beforeEach(inject(function ($rootScope, $compile) {
            html = '<input to-kana="\'hiragana\'" type="text" />';

            element = $compile(html)(scope);

            isolateScope = element.isolateScope();
        }));

        it('should have toKana defined on the scope', function () {
            expect(isolateScope.toKana).toBeDefined();
        });

        it('should pass value of toKana attribute to scope', function () {
            expect(isolateScope.toKana).toBe('hiragana');
        });
    });

    describe('with scope parameters', function () {
        beforeEach(inject(function ($rootScope, $compile) {
            html = '<input to-kana="whichKana" type="text" />';
            scope.whichKana = 'hiragana';

            element = $compile(html)(scope);

            isolateScope = element.isolateScope();
        }));

        it('should have a defined scope value', function () {
            expect(isolateScope.toKana).toBeDefined();
        });

        it('should read initial scope value', function () {
            expect(isolateScope.toKana).toBe('hiragana');
        });

        it('should be able to update toKana value through root scope', function () {
            // Set a new value on the scope
            scope.whichKana = 'katakana';

            // Run $digest() to recompile DOM
            scope.$digest();

            expect(isolateScope.toKana).toBe('katakana');
        });
    });
});
