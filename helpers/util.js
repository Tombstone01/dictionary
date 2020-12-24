const dictionary = require('word-definition');
const unirest = require('unirest');
const chalk = require("chalk");
require('dotenv').config();

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


const urban = (word) => {
	const req = unirest("GET", "https://mashape-community-urban-dictionary.p.rapidapi.com/define");

	req.query({ "term": word });
	req.headers({
		"x-rapidapi-key": process.env.API_KEY,
		"x-rapidapi-host": process.env.HOST,
		"useQueryString": true
	});

	req.end((res) => {
		if (res.error) throw new Error(res.error);

		const { list } = res.body;

		console.log("reqyures");

		list.forEach((value) =>
		{
			const { definition, author, example } = value;
			console.log(` - ${chalk.white.bold(definition)}\n`);
		});
	});
};

const dict = (word) => dictionary.getDef(word, getLocale(), { exact: false, hyperlinks: "none", formatted: false }, define);

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
		console.log(` - **${word}** - [${category}] ${definition}`);
	}

	process.exit(-1);
};

module.exports = {
	validateWord,
	getLocale,
	dict,
	urban
};
