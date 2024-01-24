/**
 * Dictionary is a very simple class that allows you to search over a list of
 * words. It is constructed from an array of strings:
 *
 *   var data = ["a", "bad", "cat", "dog"];
 *   var dict = new Dictionary(data);
 *
 * Once the dictionary has been instantiated, you can run a simple search over
 * it. Using the previous dictionary as an example:
 *
 *   dict.search("a") => ["a", "bad", "cat"]
 *
 * @param words the array of words to construct the dictionary with
 * @returns a newly created dictionary
 */
var Dictionary = function(words) {

	/**
	 * Searches over this dictionary for the given query string. A word will
	 * match if any substring of it matches the query. It is case-insensitive.
	 *
	 * @param query the substring to search for
	 * @returns an array of the results that contain the query substring
	 */
	this.search = function(query) {
		var pattern = new RegExp(query, "i");
		return $.grep(words, function(w) {
			return pattern.test(w);
		});
	};

	/**
	 * Returns the total number of words in this dictionary
	 *
	 * @returns the number of words in this dictionary
	 */
	this.size = function() {
		return words.length;
	}

	/**
	 * Returns an array of all of the words in this dictionary
	 *
	 * @returns an array of all of the words in this dictionary
	 */
	this.all = function() {
		return words;
	}

}