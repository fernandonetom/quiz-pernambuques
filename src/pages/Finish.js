import React from "react";
import { useHistory } from "react-router-dom";
import ShareButtons from "../components/ShareButtons";
import {
	Container,
	Content,
	Logo,
	Section,
	Score,
	ShareBox,
	ScoreNumber,
	ScoreText,
	ScoreQuestions,
	Footer,
	FooterContent,
} from "../styles/finish.js";
import logoImg from "../assets/images/logo-finishPage.png";

export default function Finish({ score, number }) {
	const history = useHistory();

	if (!score && !number) {
		history.replace("/");
		return 0;
	} else {
		const nota = (10 / number) * score;

		const textScore = () => {
			if (nota < 5) {
				return "Você não passou na prova kakaka!";
			} else if (nota >= 5 && nota < 7) {
				return "Está de recuperação!";
			} else if (nota >= 7 && nota < 9) {
				return "Até que foi bem!";
			} else {
				return "Excelente!";
			}
		};
		return (
			<Container>
				<Content>
					<Logo>
						<img src={logoImg} alt="Quiz Pernambuques" />
					</Logo>
					<Section>
						<Score>
							<ScoreNumber>Nota {nota.toFixed(1)}</ScoreNumber>
							<ScoreText>{textScore()}</ScoreText>
							<ScoreQuestions>
								Você acertou {score} de {number}
							</ScoreQuestions>
						</Score>
						<ShareBox>
							<h3>Compartilhe:</h3>
							<div>
								<ShareButtons />
							</div>
						</ShareBox>
					</Section>
				</Content>
				<Footer>
					<FooterContent>
						Feito por{" "}
						<a
							target="_blank"
							title="Instagram"
							href="https://instagram.com/fernandonetom"
						>
							Fernando Neto
						</a>
					</FooterContent>
				</Footer>
			</Container>
		);
	}
}
