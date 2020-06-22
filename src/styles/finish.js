import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: block;
	background: transparent linear-gradient(180deg, #248b9b 0%, #2dc4af 100%) 0%
		0% no-repeat padding-box;
	overflow-x: hidden;
`;
export const Content = styled.div`
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
`;
export const Logo = styled.div`
	width: 100%;
	@media (max-width: 768px) {
		text-align: center;
	}
	@media (min-width: 768px) {
		text-align: left;
	}
	padding: 20px 0px;

	img {
		width: 250px;
	}
`;

export const Section = styled.section`
	width: 100%;
	display: flex;
	@media (min-width: 768px) {
		justify-content: space-between;
		align-items: center;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		padding: 20px;
	}
`;
export const Score = styled.section`
	flex: 1;
	@media (min-width: 768px) {
		margin-right: 150px;
	}
`;
export const ScoreNumber = styled.section`
	background: transparent linear-gradient(180deg, #67ad31 0%, #65a236 100%) 0%
		0% no-repeat padding-box;
	padding: 20px;
	font-size: ${(props) => props.theme.fontSize.large};
	color: ${(props) => props.theme.colors.textLight};
	text-align: center;
	text-shadow: 1px 3px 1px #00000029;
	font-weight: ${(props) => props.theme.fontWeight.bold};
`;
export const ScoreText = styled.section`
	background: #ffba49 0% 0% no-repeat padding-box;
	padding: 10px;
	margin-top: 20px;
	font-size: ${(props) => props.theme.fontSize.medium};
	text-align: center;
	color: ${(props) => props.theme.colors.textLight};
	font-weight: ${(props) => props.theme.fontWeight.bold};
	text-shadow: 3px 3px 1px #00000029;
`;
export const ScoreQuestions = styled.section`
	margin-top: 30px;
	text-align: center;
	color: ${(props) => props.theme.colors.textDark};
	font-weight: ${(props) => props.theme.fontWeight.semibold};
	@media (max-width: 768px) {
		margin-bottom: 40px;
		margin-top: 20px;
	}
`;
export const ShareBox = styled.section`
	flex: 1;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 5px 5px 6px #00000050;
	border-radius: 20px;
	padding: 20px;
	color: ${(props) => props.theme.colors.textDark};

	h3 {
		margin-bottom: 20px;
	}
	div {
		display: grid;
		padding: 30px;
		@media (max-width: 768px) {
			padding: 0px;
		}
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-row-gap: 30px;
	}
	@media (min-width: 768px) {
		padding-left: 30px;
	}
`;
export const Footer = styled.section`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
`;
export const FooterContent = styled.section`
	background-color: ${(props) => props.theme.colors.backgroundColorQuiz};
	text-align: center;
	padding: 10px;
	@media (min-width: 768px) {
		border-radius: 10px 10px 0 0;
		max-width: 30%;
		margin: 0 auto;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;
