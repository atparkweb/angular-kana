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

        it('should transliterate double \'n\' to hiragana', function () {
            expect(this.kanaService.toHiragana('mann')).toBe('まん');
        });

        it('should transliterate double consonants to hiragana', function () {
            expect(this.kanaService.toHiragana('natto')).toBe('なっと');
        });

        it('should transliterate hiragana digraphs', function () {
            expect(this.kanaService.toHiragana('kyu')).toBe('きゅ');
        });

        it('should not transliterate unmatched patterns for hiragana', function () {
            expect(this.kanaService.toHiragana('sushix')).toBe('すしx');
        });
    });

    describe('toKatakana', function () {
        it('should transliterate to katakana', function () {
            expect(this.kanaService.toKatakana('katakana')).toBe('カタカナ');
        });

        it('should transliterate double \'n\' to katakana', function () {
            expect(this.kanaService.toKatakana('mann')).toBe('マン');
        });

        it('should transliterate double consonants to katakana', function () {
            expect(this.kanaService.toKatakana('natto')).toBe('ナット');
        });

        it('should transliterate katakana digraphs', function () {
            expect(this.kanaService.toKatakana('kyu')).toBe('キュ');
        });

        it('should transliterate long "a" to dash in katakana', function () {
            expect(this.kanaService.toKatakana('aa')).toBe('アー');
        });

        it('should transliterate long "i" to dash in katakana', function () {
            expect(this.kanaService.toKatakana('kii')).toBe('キー');
        });

        it('should transliterate long "e" to dash in katakana', function () {
            expect(this.kanaService.toKatakana('kee')).toBe('ケー');
        });

        it('should transliterate long "u" to dash in katakana', function () {
            expect(this.kanaService.toKatakana('kyuu')).toBe('キュー');
        });

        it('should transliterate long "o" to dash in katakana', function () {
            expect(this.kanaService.toKatakana('kyoo')).toBe('キョー');
        });

        it('should not transliterate unmatched patterns for katakana', function () {
            expect(this.kanaService.toKatakana('sushix')).toBe('スシx');
        });
    });
});
