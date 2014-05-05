describe('angular-kana-demo', function () {
    var protractor = protractor.getInstance();

    describe("index", function () {
        it("should display the correct title", function () {
            protractor.get('/#');
            expect(protractor.getTitle()).toBe('Angular-Kana Demo');
        });
    });
});
