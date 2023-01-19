export default class Locale {
    language;
    strings;
    constructor(language) {
        this.language = language;
        this.strings = JSON.parse(Locale.fetchLanguageFile(language));
    }
    translate(input, params = {}) {
        let translation = input;
        if (input in this.strings) {
            translation = this.strings[input];
        }
        Object.entries(params).forEach(([key, value]) => {
            translation = translation.replaceAll(`:${key}`, value);
        });
        return translation;
    }
    trans(input, params = {}) {
        return this.translate(input, params);
    }
    t(input, params = {}) {
        return this.translate(input, params);
    }
    transChoice(input, count) {
        let translation = input;
        if (input in this.strings) {
            translation = this.strings[input];
        }
        const choices = translation.split('|');
        choices.forEach((choice) => {
            if (Locale.matchesChoice(choice, count)) {
                translation = Locale.extractChoiceText(choice);
            }
        });
        translation = translation.replaceAll(':count', `${count}`);
        return translation;
    }
    formatNumber(input) {
        return input.toLocaleString(this.language);
    }
    formatDate(input) {
        return input.toLocaleString(this.language);
    }
    static getAvailableBrowserLocales() {
        return [...navigator.languages];
    }
    static getCurrentBrowserLocale() {
        return navigator.language;
    }
    static fetchLanguageFile(tag) {
        let data = '';
        const subtags = tag.split('-');
        while (subtags.length > 0 && data === '') {
            const filename = subtags.join('-');
            data = Locale.loadTextFileViaHTTPRequest(`assets/lang/${filename}.json`);
            subtags.splice(-1, 1);
        }
        if (data === '') {
            data = '{}';
        }
        return data;
    }
    static loadTextFileViaHTTPRequest(url) {
        const request = new XMLHttpRequest();
        request.open('GET', url, false);
        request.send(null);
        if (request.status === 200) {
            return request.responseText;
        }
        return '';
    }
    static matchesChoice(choice, amount) {
        if (choice[0] === '{') {
            const endIndex = choice.indexOf('}');
            return Number(choice.substring(1, endIndex)) === amount;
        }
        if (choice[0] === '[') {
            const endIndex = choice.indexOf(']');
            const options = choice.substring(1, endIndex).split(',');
            return amount >= Number(options[0]) && (options[1] === '*' || amount < Number(options[1]));
        }
        return false;
    }
    static extractChoiceText(str) {
        let endIndex = str.indexOf('}');
        if (str[0] === '[') {
            endIndex = str.indexOf(']');
        }
        return str.substring(endIndex + 2);
    }
}
//# sourceMappingURL=Locale.js.map