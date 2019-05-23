let questions;
let questionsCount;
let currentQuestion;
let score = 0;

let question_title_elem = document.getElementById("question-title");
let answers_elem = document.getElementById("answers");
let send_answer = document.getElementById("send_answer");
let question_image_elem = document.getElementById("question-image");

function getQuestions() {
	questions =
		[
			{
				"id": "0",
				"title": "Jaki kolor ma piłka do koszykówki? :)",
				"imageUrl": "photos/zle2.jpg",
				"answers": [
					{
						"id": "0",
						"answer": "zielony"
					},
					{
						"id": "1",
						"answer": "niebieski"
					},
					{
						"id": "2",
						"answer": "pomarańczowy"
					}
				],
				"correct": "2"
			},
			{
				"id": "1",
				"title": "Z ilu części się składa i jak długo trwa mecz koszykówki?",
				"imageUrl": "photos/ile_trwa_mecz.gif",
				"answers": [
					{
						"id": "0",
						"answer": "3 x 15 min"
					},
					{
						"id": "1",
						"answer": "4 x 10 min"
					},
					{
						"id": "2",
						"answer": "4 x 12.5 min"
					}
				],
				"correct": "1"
			},
			{
				"id": "2",
				"title": "Kim jest zawodnik przedstawiony na zdjęciu?",
				"imageUrl": "photos/gortat.jpg",
				"answers": [
					{
						"id": "0",
						"answer": "David Robinson"
					},
					{
						"id": "1",
						"answer": "Michael Jordan"
					},
					{
						"id": "2",
						"answer": "Marcin Gortat"
					}
				],
				"correct": "2"
			},
			{
				"id": "3",
				"title": "Czy zaprezentowane na zdjęciu ułożenie dłoni na piłce jest poprawne?",
				"imageUrl": "photos/Dobrze.jpg",
				"answers": [
					{
						"id": "0",
						"answer": "Tak"
					},
					{
						"id": "1",
						"answer": "Nie"
					}
				],
				"correct": "0"
			},
			{
				"id": "4",
				"title": "Ilu zawodników może grać w każdej z drużyn?",
				"imageUrl": "photos/koszykarze.jpg",
				"answers": [
					{
						"id": "0",
						"answer": "5"
					},
					{
						"id": "1",
						"answer": "6"
					},
					{
						"id": "2",
						"answer": "7"
					}
				],
				"correct": "0"
			},
			{
				"id": "5",
				"title": "Jak rozpoczyna się każda rozgrywka meczu?",
				"imageUrl": "photos/smieszny_gif.gif",
				"answers": [
					{
						"id": "0",
						"answer": "Wybiciem piłki w losowe miejsce boiska przez sędziego"
					},
					{
						"id": "1",
						"answer": "Losowaniem przez sędziego"
					},
					{
						"id": "2",
						"answer": "Rzutem piłki do góry przez sędziego i walką dwóch zawodników w celu przejęcia piłki"
					}
				],
				"correct": "2"
			},
						{
				"id": "6",
				"title": "Czy zaprezentowane na zdjęciu ułożenie nadgarstka jest prawidłowe?",
				"imageUrl": "photos/Dobrze2.jpg",
				"answers": [
					{
						"id": "0",
						"answer": "Nie"
					},
					{
						"id": "1",
						"answer": "Tak"
					}
				],
				"correct": "1"
			},
						{
				"id": "7",
				"title": "Czy zaprezentowana na zdjęciu postawa jest prawidłowa?",
				"imageUrl": "photos/zle1.jpg",
				"answers": [
					{
						"id": "0",
						"answer": "Nie"
					},
					{
						"id": "1",
						"answer": "Tak"
					}
				],
				"correct": "0"
						}
		]
	questionsCount = questions.length;
	currentQuestion = 0;
}

function displayQuestion(question) {
	question_title_elem.innerHTML = "";
	question_image_elem.innerHTML = "";
	answers_elem.innerHTML = "";

	let question_title = document.createTextNode(question.title);
	question_title_elem.appendChild(question_title);

	let question_image = document.createElement("IMG");
	question_image.setAttribute("src", question.imageUrl)
	question_image.classList.add("img-fluid");
	question_image.setAttribute("width", "400")
	question_image_elem.appendChild(question_image);

	question.answers.forEach(answer => {
		let label = document.createElement("label");

		label.classList.add("question-container");
		let answer_input = document.createElement("input");
		answer_input.setAttribute("type", "radio");
		answer_input.setAttribute("name", "answer");
		answer_input.setAttribute("value", answer.id);
		answer_input.classList.add("answer");

		let answer_title = document.createTextNode(answer.answer);
		label.appendChild(answer_input);
		label.appendChild(answer_title);

		answers_elem.appendChild(label);
	});
}

send_answer.addEventListener("click", function () {
	let answers = document.getElementsByClassName("answer");
	for (let i = 0; i < answers.length; i++) {
		let answer = answers[i];
		let question = questions[currentQuestion];

		if (answer.checked && answer.value == question.correct) {
			answer.parentNode.classList.add("correct");
			score++;
		} else if (answer.checked && answer.value != question.correct) {
			answer.parentNode.classList.add("incorrect");
		}

		answer.disabled = true;
	}

	currentQuestion++;

	let next_question = document.getElementById("next_question");
	next_question.classList.remove("hide");
	this.classList.add("hide");
});

next_question.addEventListener("click", function () {
	if (currentQuestion == questionsCount) {
		document.getElementById("question").classList.add("hide");
		question_image_elem.classList.add("hide");
		document.getElementById("scores").classList.remove("hide");
		document.getElementById("score").innerHTML = score + "/" + questionsCount;
		return;
	}

	displayQuestion(questions[currentQuestion]);
	send_answer.classList.remove("hide");
	this.classList.add("hide");
});

getQuestions();
displayQuestion(questions[currentQuestion]);