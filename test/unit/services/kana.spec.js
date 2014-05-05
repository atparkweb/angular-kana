describe('angular-kana: kanaService', function () {
    var kanaService;

    beforeEach(function () {
        angular.mock.module('ap.kana');
    });

    beforeEach(inject(function (kanaService) {
        this.kanaService = kanaService;
    }));

    it('should translate to hiragana', function () {
        expect(this.kanaService.toHiragana('hiragana')).toBe('ひらがな');
    });

    it('should translate to katakana', function () {
        expect(this.kanaService.toKatakana('katakana')).toBe('カタカナ');
    });

});
