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
		margin-top: 80px;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		padding: 20px;
	}
`;
export const Left = styled.section`
	flex: 1;
	h1 {
		font-size: 50px;
		color: ${(props) => props.theme.colors.textLight};
		font-weight: ${(props) => props.theme.fontWeight.black};
		@media (max-width: 768px) {
			font-size: 40px;
		}
	}
	h4 {
		color: ${(props) => props.theme.colors.textLight};
		font-weight: ${(props) => props.theme.fontWeight.light};
	}
	a {
		background: transparent linear-gradient(180deg, #fff412 0%, #e2d80e 100%) 0%
			0% no-repeat padding-box;
		box-shadow: 0px 3px 6px #00000029;
		border-radius: 10px;
		padding: 10px 70px;
		cursor: pointer;
		font-size: 20px;
		font-weight: ${(props) => props.theme.fontWeight.semibold};
		display: inline-flex;
		align-items: center;
		margin-top: 30px;
		transition: 0.3s all;
		text-decoration: none;
		color: ${(props) => props.theme.colors.textDark};

		svg {
			margin-left: 10px;
		}
		&:hover {
			background: transparent linear-gradient(180deg, #ffff32 0%, #a2d100 100%)
				0% 0% no-repeat padding-box;
			transform: scale(1.1) translateX(15px);
		}
	}
	@media (min-width: 768px) {
		margin-right: 150px;
	}
	@media (max-width: 768px) {
		width: 100%;
		text-align: center;
	}
`;
export const Right = styled.section`
	color: ${(props) => props.theme.colors.textDark};
	img {
		width: 400px;
		@media (max-width: 768px) {
			margin-top: 100px;
			width: 100%;
		}
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
		margin-bottom: -2px;
	}
`;
