const questions = require("../api/data.json");

function shuffleAnswer(array) {
	let newArray = [...array];
	newArray.sort(() => Math.random() - 0.5);
	return newArray;
}

function shuffle(array) {
	let newArray = [...array];
	newArray.sort(() => Math.random() - 0.5);
	newArray = newArray.slice(0, 8);

	newArray.map((item, index) => {
		console.log("Antigo: " + item.answers);
		item.answers = shuffleAnswer(item.answers);
		console.log("Novo: " + item.answers);
	});
	return newArray;
}

export function GetQuestions() {
	const questionsSort = shuffle(questions);
	return questionsSort;
}
