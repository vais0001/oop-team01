/**
 * No Software Warranty. User acknowledges and agrees that the use of the
 * Software is at user's sole risk. The Software and related documentation
 * are provided “AS IS” and without any warranty of any kind and Developer
 * EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE.
 */
export default class Locale {
  private language: string;

  private strings: { [key: string]: string };

  /**
   * Construct a new object of this class
   *
   * @param language an RFC5646 language tag like 'nl' or 'en-US'
   */
  public constructor(language: string) {
    this.language = language;
    this.strings = JSON.parse(Locale.fetchLanguageFile(language));
  }

  /**
   * Translates a string
   *
   * @param input the string to translate
   * @param params the parameters, if needed
   * @returns the translated string or the input if a translation isn't found
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  public translate(input: string, params: Object = {}): string {
    let translation: string = input;
    // If the input is a property of the data object
    if (input in this.strings) {
      translation = this.strings[input];
    }
    // Replace all parameters in the result
    Object.entries(params).forEach(([key, value]) => {
      translation = translation.replaceAll(`:${key}`, value);
    });

    return translation;
  }

  /**
   * Alias for the `translate` method
   *
   * @param input the string to translate
   * @param params the parameters, if needed
   * @returns the translated string or the input if a translation isn't found
   * @see {@link Locale.translate()}
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  public trans(input: string, params: Object = {}): string {
    return this.translate(input, params);
  }

  /**
   * Alias for the `translate` method
   *
   * @param input the string to translate
   * @param params the parameters, if needed
   * @returns the translated string or the input if a translation isn't found
   * @see {@link Locale.translate()}
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  public t(input: string, params: Object = {}): string {
    return this.translate(input, params);
  }

  /**
   * Translates a string with options pending on the given `count`
   *
   * @param input the string to translate
   * @param count the amount used for the choice
   * @returns the translated string or the input if a translation isn't found
   */
  public transChoice(input: string, count: number): string {
    let translation: string = input;
    // If the input is a property of the data object
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

  /**
   * Formats the given number in a locale specific format
   *
   * @param input the number to format
   * @returns a string representing the formatted number
   */
  public formatNumber(input: number): string {
    return input.toLocaleString(this.language);
  }

  /**
   * Formats the given Date object in a locale specific format
   *
   * @param input the Date to format
   * @returns a string representing the formatted Date
   */
  public formatDate(input: Date): string {
    return input.toLocaleString(this.language);
  }

  /**
   * Returns RFC5646 tags of the available languages of the browser
   *
   * @returns an array representing RFC5646 tags of the available languages
   *  of the browser
   */
  public static getAvailableBrowserLocales(): Array<string> {
    return [...navigator.languages];
  }

  /**
   * Returns the RFC5646 tag of the current browser language
   *
   * @returns the RFC5646 tag of the current browser language
   */
  public static getCurrentBrowserLocale(): string {
    return navigator.language;
  }

  /**
   * Fetches a language file based on the given tag
   *
   * @param tag the RFC5646 tag
   * @returns a JSON string representing a
   */
  private static fetchLanguageFile(tag: string) : string {
    // Load a language file that matches the chosen language
    let data = '';
    // split the language into RFC5646 subtags
    const subtags = tag.split('-');
    // Try to load the most specific language file, make more generic if needed
    while (subtags.length > 0 && data === '') {
      // Rejoin the subtags to create the filename
      const filename = subtags.join('-');
      data = Locale.loadTextFileViaHTTPRequest(`assets/lang/${filename}.json`);
      // Remove the last element from the array
      subtags.splice(-1, 1);
    }
    if (data === '') {
      data = '{}';
    }
    return data;
  }

  /**
   * Loads a file via a synchronous HTTP request.
   *
   * NOTE: the browser console will print a 404 error if the file
   * doesn't exist.
   *
   * @param url the URL of the text file
   * @returns a string representing the content of the text file or an empty
   *  string if the file doesn't exist
   */
  private static loadTextFileViaHTTPRequest(url: string): string {
    // Fetch the language file using an HTTP request
    const request = new XMLHttpRequest();

    request.open('GET', url, false); // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
      return request.responseText;
    }
    // Loading failed; return empty string
    return '';
  }

  /**
   * Helper method. Checks if the specified choice matches the specified amount
   *
   * @param choice the choice string
   * @param amount the amount to be tested
   * @returns `true` if the amount matches the choice string
   */
  private static matchesChoice(choice: string, amount: number): boolean {
    if (choice[0] === '{') {
      // Find the index of the first } character after the { character
      const endIndex = choice.indexOf('}');
      return Number(choice.substring(1, endIndex)) === amount;
    }
    if (choice[0] === '[') {
      // Find the index of the first ] character after the [ character
      const endIndex = choice.indexOf(']');
      // Extract the substring between [ and ]
      const options = choice.substring(1, endIndex).split(',');
      return amount >= Number(options[0]) && (options[1] === '*' || amount < Number(options[1]));
    }
    return false;
  }

  /**
   * Helper method. Extracts the actual choice string
   *
   * @param str the input string to extract from
   * @returns the extracted string
   */
  private static extractChoiceText(str: string): string {
    let endIndex = str.indexOf('}');
    if (str[0] === '[') {
      endIndex = str.indexOf(']');
    }
    return str.substring(endIndex + 2);
  }
}
