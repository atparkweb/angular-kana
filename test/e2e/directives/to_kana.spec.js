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
            input.sendKeys('minnnasann');

            expect(input.getAttribute('value')).toBe('みんなさん');
        });
    });

    describe('toKatakana', function () {
        var input;

        beforeEach(function () {
            input = $('#to-katakana');
        });

        afterEach(function () {
            input.clear();
        });

        it('should transliterate to katakana', function () {
            input.sendKeys('katakana');

            expect(input.getAttribute('value')).toBe('カタカナ');
        });

        it('should not transliterate unsupported characters', function () {
            input.sendKeys('kanax');

            expect(input.getAttribute('value')).toBe('カナx');
        });

        it('should transliterate double \'n\'', function () {
            input.sendKeys('pann');

            expect(input.getAttribute('value')).toBe('パン');
        });

        it('should transliterate hyphen', function () {
            input.sendKeys('ra-menn');

            expect(input.getAttribute('value')).toBe('ラーメン');
        });
    });
});