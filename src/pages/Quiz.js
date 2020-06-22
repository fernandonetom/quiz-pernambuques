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
	FeitoMobile,
} from "../styles/quiz";

import Finish from "./Finish";

const getWindowDimension = () => {
	const width =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;
	const height =
		window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight;
	return { width, height };
};

export default function Quiz() {
	const [questionNow, setQuestionNow] = useState(0);
	const [error, setError] = useState("");
	const [score, setScore] = useState(0);
	const [finished, setFinished] = useState(false);

	const isMobile = getWindowDimension().width < 768 ? true : false;

	let option = null;
	const handleNext = () => {
		if (!option) {
			setError("Selecione uma opção!");
		} else {
			setError("");

			if (data[questionNow].answers[option] === data[questionNow].answer) {
				setScore(score + 1);
				console.log("acertou");
			}

			if (questionNow + 1 === data.length) {
				setFinished(true);
			}
			setQuestionNow(questionNow + 1);
			document.getElementById("question").reset();
		}
	};

	const handleOption = (e) => {
		option = e.target.value;
		console.log(option);
	};

	if (finished) {
		return <Finish score={score} number={data.length} />;
	} else {
		return (
			<Container>
				<Header>
					<HeaderQuestion>
						Questão {questionNow + 1} de {data.length}
					</HeaderQuestion>
					<HeaderBack>
						<Link to="/">
							<AiOutlineArrowLeft />
							Voltar ao início
						</Link>
					</HeaderBack>
				</Header>
				<BeforeQuestion>Você fala Pernambuquês?</BeforeQuestion>
				<Question>Então como fala: "{data[questionNow].question}"?</Question>
				{error != "" && <Error>{error}</Error>}
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

				{isMobile && (
					<FeitoMobile>
						Feito por{" "}
						<a target="_blank" href="https://instagram.com/fernandonetom">
							Fernando Neto
						</a>
					</FeitoMobile>
				)}
				<Footer>
					<FooterContainer>
						{!isMobile && (
							<FooterRights>
								Feito por{" "}
								<a target="_blank" href="https://instagram.com/fernandonetom">
									Fernando Neto
								</a>
							</FooterRights>
						)}
						<FooterNext onClick={handleNext}>Avançar</FooterNext>
					</FooterContainer>
				</Footer>
			</Container>
		);
	}
}
