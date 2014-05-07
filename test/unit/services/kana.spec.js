describe('angular-kana: kanaService', function () {
    var kanaService;

    beforeEach(function () {
        angular.mock.module('atparkweb.kana');
    });

    beforeEach(inject(function (kanaService) {
        this.kanaService = kanaService;
    }));

    describe('toHiragana', function () {
        it('should transliterate to hiragana', function () {
            expect(this.kanaService.toHiragana('hiragana')).toBe('ひらがな');
        });

        it('should not transliterate unmatched patterns for hiragana', function () {
            expect(this.kanaService.toHiragana('sushix')).toBe('すしx');
        });

        it('should correctly transliterate double \'n\' to hiragana', function () {
            expect(this.kanaService.toHiragana('mann')).toBe('まん');
        });

        it('should correctly transliterate double consonants to hiragana', function () {
            expect(this.kanaService.toHiragana('natto')).toBe('なっと');
        });
    });

    describe('toKatakana', function () {
        it('should translate to katakana', function () {
            expect(this.kanaService.toKatakana('katakana')).toBe('カタカナ');
        });

        it('should not transliterate unmatched patterns for katakana', function () {
            expect(this.kanaService.toKatakana('sushix')).toBe('スシx');
        });

        it('should correctly transliterate double \'n\' to katakana', function () {
            expect(this.kanaService.toKatakana('mann')).toBe('マン');
        });

        it('should correctly transliterate double consonants to katakana', function () {
            expect(this.kanaService.toKatakana('natto')).toBe('ナット');
        });
    });
});
