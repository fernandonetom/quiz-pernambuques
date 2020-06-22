import React, { useEffect, useState } from "react";
import data from "../api/data.json";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

import {
	Container,
	Footer,
	Header,
	HeaderQuestion,
	HeaderBack,
	BeforeQuestion,
	Question,
	Answer,
	AnswerGroup,
	FooterContainer,
	FooterRights,
	FooterNext,
	Error,
} from "../styles/quiz";

export default function Quiz() {
	const [questions, setQuestions] = useState([]);
	const [questionNow, setQuestionNow] = useState(0);
	const [error, setError] = useState("");
	const [score, setScore] = useState(0);
	const [finished, setFinished] = useState(true);

	let option = null;
	const handleNext = () => {
		if (!option) {
			setError("Selecione uma opção!");
		} else {
			setError("");
			data[questionNow].answered = true;

			if (data[questionNow].answers[option] === data[questionNow].answer) {
				setScore(score + 1);
				console.log("acertou");
			}

			if (questionNow + 1 === data.length) {
				setFinished(true);
			}
			setQuestionNow(questionNow + 1);
			console.log("seu score" + score);
			document.getElementById("question").reset();
		}
	};

	const handleOption = (e) => {
		option = e.target.value;
		console.log(option);
	};

	useEffect(() => {
		setQuestions(data);
	}, []);

	if (finished) {
		return <div>finalizou, seu score é {score}</div>;
	} else {
		return (
			<Container>
				<Header>
					<HeaderQuestion>Questão {questionNow + 1} de 8</HeaderQuestion>
					<HeaderBack>
						<Link to="/">
							<AiOutlineArrowLeft />
							Voltar ao início
						</Link>
					</HeaderBack>
				</Header>
				<BeforeQuestion>Você fala Pernambuques?</BeforeQuestion>
				<Question>Então como fala: "{data[questionNow].question}"?</Question>
				<form id="question">
					<Answer>
						{data[questionNow].answers.map((item, index) => {
							return (
								<AnswerGroup key={index}>
									<input
										id={questionNow + "option-" + index}
										name="option"
										value={index}
										//onChange={(e) => handleOption(e)}
										onClick={(e) => handleOption(e)}
										type="radio"
									/>
									<label htmlFor={questionNow + "option-" + index}>
										{item}
									</label>
								</AnswerGroup>
							);
						})}
					</Answer>
				</form>
				{error != "" && <Error>{error}</Error>}
				<Footer>
					<FooterContainer>
						<FooterRights>Feito por Fernando Neto</FooterRights>
						<FooterNext onClick={handleNext}>Avançar</FooterNext>
					</FooterContainer>
				</Footer>
			</Container>
		);
	}
}
