const { getUserLocale } = require('get-user-locale');

/**
 * @param { String } word  - this is the word to define
 * @returns either -1 or 1
 */
const validateWord = (word) => {
	if (word === undefined || word.length <= 0) {
		console.log("Please provide a valid word to define");
		return -1;
	} else if (word.startsWith('-')) {
		console.log("Please provide a valid word to define");
		return -1;
	} else return 1
}

const getLocale = () => getUserLocale().split('-')[0];

/**
 * This function is called when a explanation
 * has been found I guess
 * 
 * @param { Object } explanation 
 */
const define = (explanation) => {
	const { word, err, category, definition } = explanation;

	if (err) {
		console.log(`${err}, please try again!`);
		process.exit(-1);
	}

	if (typeof explanation === undefined || typeof category === undefined) {
		console.log("sorry, the word is either mispelled or does not exist");
		console.log(`${word} - [${category}] ${definition}`);
	} else if (explanation === undefined || category === undefined) {
		console.log("sorry, the word is either mispelled or does not exist");
		process.exit(-1);
	} else {
		console.log(`${word} - [${category}] ${definition}`);
	}
};

module.exports = {
	validateWord,
	getLocale,
	define
};