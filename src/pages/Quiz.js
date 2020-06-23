import React, { useState } from "react";
//import data from "../api/data.json";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
//import { shuffle } from "../components/functions";
import { GetQuestions } from "../components/getApi";

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
	InputCustom,
	LabelCustom,
} from "../styles/quiz";

import Finish from "./Finish";

const data = GetQuestions();

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
			document.getElementById("question").reset();
			if (error.length > 0) {
				setError("");
			}

			if (data[questionNow].answers[option] === data[questionNow].answer) {
				setScore(score + 1);
			}

			if (questionNow + 1 === data.length) {
				setFinished(true);
			}

			setQuestionNow(questionNow + 1);
		}
	};

	const handleOption = (e) => {
		option = e.target.value;
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
				{error !== "" && <Error>{error}</Error>}
				<form id="question">
					<Answer>
						{data[questionNow].answers.map((item, index) => {
							return (
								<AnswerGroup key={index}>
									<InputCustom
										id={"option-" + index}
										name="option"
										value={index}
										//onChange={(e) => handleOption(e)}
										onClick={(e) => handleOption(e)}
										type="radio"
									/>
									<LabelCustom htmlFor={"option-" + index}>
										{item.charAt(0).toUpperCase() + item.slice(1)}
									</LabelCustom>
								</AnswerGroup>
							);
						})}
					</Answer>
				</form>

				{isMobile && (
					<FeitoMobile>
						Feito por{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://instagram.com/fernandonetom"
						>
							Fernando Neto
						</a>
					</FeitoMobile>
				)}
				<Footer>
					<FooterContainer>
						{!isMobile && (
							<FooterRights>
								Feito por{" "}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://instagram.com/fernandonetom"
								>
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
