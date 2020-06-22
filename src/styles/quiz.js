import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
`;
export const Header = styled.div`
	display: flex;
	padding: 20px 0;
	color: ${(props) => props.theme.colors.textDark};
	justify-content: space-between;
	align-items: center;
	font-weight: ${(props) => props.theme.fontWeight.light};
`;
export const HeaderQuestion = styled.div`
	font-size: ${(props) => props.theme.fontSize.medium};
`;
export const Error = styled.div`
	font-size: ${(props) => props.theme.fontSize.medium};
`;
export const HeaderBack = styled.div`
	font-size: ${(props) => props.theme.fontSize.xsmall};
	display: flex;
	align-items: center;
	a {
		text-decoration: none;
		color: ${(props) => props.theme.colors.textDark};
		justify-content: space-between;
		&:hover {
			color: ${(props) => props.theme.colors.primary};
		}
	}

	svg {
		margin-right: 15px;
	}
`;
export const BeforeQuestion = styled.div`
	color: ${(props) => props.theme.colors.primary};
	font-size: ${(props) => props.theme.fontSize.small};
	font-weight: ${(props) => props.theme.fontWeight.light};
	margin-top: 20px;
`;
export const Question = styled.div`
	width: 100%;
	background: transparent linear-gradient(180deg, #2dc4af 0%, #31aa9a 100%) 0%
		0% no-repeat padding-box;
	padding: 20px;
	margin-top: 10px;
	color: ${(props) => props.theme.colors.textLight};
	font-weight: ${(props) => props.theme.fontWeight.bold};
	font-size: ${(props) => props.theme.fontSize.medium};
`;
export const Answer = styled.div`
	display: grid;
	width: 100%;
	max-width: 1000px;
	margin: 20px auto;
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 20px;
	}
`;
export const AnswerGroup = styled.div`
	background-color: #fff;
	display: block;
	margin: 10px 0;
	position: relative;
	transition: 0.2s all;

	&:hover {
		transform: scale(1.05);
	}

	label {
		padding: 12px 30px;
		width: 100%;
		display: block;
		text-align: left;
		color: #3c454c;
		cursor: pointer;
		position: relative;
		z-index: 2;
		transition: color 200ms ease-in;
		overflow: hidden;

		&:before {
			width: 10px;
			height: 10px;
			border-radius: 50%;
			content: "";
			background: transparent linear-gradient(180deg, #087e8b 0%, #20a39e 100%)
				0% 0% no-repeat padding-box;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%) scale3d(1, 1, 1);
			transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
			opacity: 0;
			z-index: -1;
		}

		&:after {
			width: 32px;
			height: 32px;
			content: "";
			border: 2px solid #d1d7dc;
			background-color: #fff;
			background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
			background-repeat: no-repeat;
			background-position: 2px 3px;
			border-radius: 50%;
			z-index: 2;
			position: absolute;
			right: 30px;
			top: 50%;
			transform: translateY(-50%);
			cursor: pointer;
			transition: all 200ms ease-in;
		}
	}

	input:checked ~ label {
		color: #fff;

		&:before {
			transform: translate(-50%, -50%) scale3d(56, 56, 1);
			opacity: 1;
		}

		&:after {
			background-color: ${(props) => props.theme.colors.primary};
			border-color: ${(props) => props.theme.colors.primary};
		}
	}

	input {
		width: 32px;
		height: 32px;
		order: 1;
		z-index: 2;
		position: absolute;
		right: 30px;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		visibility: hidden;
	}
`;
export const AnswerLabel = styled.div`
	background: transparent linear-gradient(180deg, #087e8b 0%, #20a39e 100%) 0%
		0% no-repeat padding-box;
	border-radius: 5px;
`;
export const Footer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	background: #ffba49 0% 0% no-repeat padding-box;
	height: 50px;
	width: 100%;
`;
export const FooterContainer = styled.div`
	width: 100%;
	height: 100%;
	max-width: 1280px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const FooterRights = styled.div`
	color: ${(props) => props.theme.colors.textDark};
	font-size: ${(props) => props.theme.fontSize.small};
`;
export const FooterNext = styled.div`
	background: transparent linear-gradient(180deg, #30de38 0%, #37b23d 100%) 0%
		0% no-repeat padding-box;
	padding: 5px 50px;
	border-radius: 5px;
	cursor: pointer;
	color: ${(props) => props.theme.colors.textDark};
	font-size: ${(props) => props.theme.fontSize.small};
	transition: 0.2s all;
	&:hover {
		background: transparent
			linear-gradient(
				180deg,
				${(props) => props.theme.colors.primary} 0%,
				${(props) => props.theme.colors.primary} 100%
			)
			0% 0% no-repeat padding-box;
		color: ${(props) => props.theme.colors.textLight};
		transform: scale(1.05);
	}
`;