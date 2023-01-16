import styled from 'styled-components';
import { DARK_GREY_COLOR, LIGHT_GREY_COLOR, WHITE_COLOR } from 'GlobalStyle';

export const Header = styled.div`
	width: 100%;
	height: 245px;
	position: absolute;
	z-index: -10;
	overflow: hidden;
	display: flex;
	align-items: center;
`;

export const HeaderImg = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const MainContainer = styled.div`
	width: calc(100% - 150px);
	margin: 150px 75px;
	position: absolute;
	background: ${WHITE_COLOR};
	border: 1px solid ${LIGHT_GREY_COLOR};
	box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
	border-radius: 5px;
`;

export const ArticleTitle = styled.div`
	font-size: 24px;
	line-height: 29px;
	color: ${DARK_GREY_COLOR};
	margin-top: 35px;
	margin-bottom: 50px;
	text-align: center;
`;

export const TextContainer = styled.div`
	margin: 0px 75px 50px 75px;
`;

export const Text = styled.p`
	font-size: 18px;
	line-height: 150%;
`;

export const BackToHome = styled.p`
	font-weight: 700;
	font-size: 16px;
	line-height: 150%;
	color: ${DARK_GREY_COLOR};
`;

export const BackToHomeButton = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: 25px;
	position: absolute;
	bottom: 45px;
	left: 168px;
`;
