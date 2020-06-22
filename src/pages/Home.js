import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
	Container,
	Content,
	Logo,
	Section,
	Footer,
	Left,
	Right,
	FooterContent,
} from "../styles/home";
import logoImg from "../assets/images/logo-finishPage.png";
import bandeira from "../assets/images/bandeira-pernambuco.png";

export default function Home() {
	return (
		<Container>
			<Content>
				<Logo>
					<img src={logoImg} alt="Quiz Pernambuques" />
				</Logo>
				<Section>
					<Left>
						<h1>Você sabe falar Pernambuques?</h1>
						<h4>Nosso quiz é perfeito para você descobrir.</h4>
						<Link to="/quiz">
							Bora lá <AiOutlineArrowRight />
						</Link>
					</Left>
					<Right>
						<img src={bandeira} alt="Bandeira de Pernambuco" />
					</Right>
				</Section>
			</Content>
			<Footer>
				<FooterContent>
					Feito por{" "}
					<a target="_blank" href="https://instagram.com/fernandonetom">
						Fernando Neto
					</a>
				</FooterContent>
			</Footer>
		</Container>
	);
}
