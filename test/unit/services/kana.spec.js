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

        it('should transliterate all-caps to hiragana', function () {
            expect(this.kanaService.toHiragana('HIRAGANA')).toBe('ひらがな');
        });

        it('should translate mixed-case to hiragana', function () {
            expect(this.kanaService.toHiragana('HiRaGAna')).toBe('ひらがな');
        });

        it('should transliterate double \'n\' to hiragana', function () {
            expect(this.kanaService.toHiragana('mann')).toBe('まん');
        });

        it('should transliterate \'n\' followed by consonant to hiragana', function () {
            expect(this.kanaService.toHiragana('ng')).toBe('んg');
        });

        it('should transliterate double consonants to hiragana', function () {
            expect(this.kanaService.toHiragana('natto')).toBe('なっと');
        });

        it('should transliterate double vowels to hiragana', function () {
            expect(this.kanaService.toHiragana('oo')).toBe('おお');
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

        it('should transliterate all-caps to katakana', function () {
            expect(this.kanaService.toKatakana('KATAKANA')).toBe('カタカナ');
        });

        it('should transliterate mixed-case to katakana', function () {
            expect(this.kanaService.toKatakana('kATaKANa')).toBe('カタカナ');
        });

        it('should transliterate double \'n\' to katakana', function () {
            expect(this.kanaService.toKatakana('mann')).toBe('マン');
        });

        it('should transliterate \'n\' followed by consonant to katakana', function () {
            expect(this.kanaService.toKatakana('ng')).toBe('ンg');
        });

        it('should transliterate double consonants to katakana', function () {
            expect(this.kanaService.toKatakana('natto')).toBe('ナット');
        });

        it('should transliterate katakana digraphs', function () {
            expect(this.kanaService.toKatakana('kyu')).toBe('キュ');
        });

        it('should transliterate hyphen to a long dash in katakana', function () {
            expect(this.kanaService.toKatakana('ko-')).toBe('コー');
        });

        it('should not transliterate unmatched patterns for katakana', function () {
            expect(this.kanaService.toKatakana('sushix')).toBe('スシx');
        });
    });
});
