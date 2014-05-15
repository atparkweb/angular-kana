describe('angular-kana: toKana directive', function () {
    browser.get('demo/index.html');

    describe('toHiragana', function () {
        var input;

        beforeEach(function () {
            input = $('#to-hiragana');
        });

        afterEach(function () {
            input.clear();
        });

        it('should transliterate to hiragana', function () {
            input.sendKeys('hiragana');

            expect(input.getAttribute('value')).toBe('ひらがな');
        });

        it('should not transliterate unsupported characters', function () {
            input.sendKeys('kanax');

            expect(input.getAttribute('value')).toBe('かなx');
        });

        it('should transliterate double \'n\'', function () {
            input.sendKeys('minnnasan');

            expect(input.getAttribute('value')).toBe('みんなさん');
        });
    });
});