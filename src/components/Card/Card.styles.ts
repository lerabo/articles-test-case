import { DARK_GREY_COLOR, LIGHT_GREY_COLOR, WHITE_COLOR } from 'GlobalStyle';
import styled from 'styled-components';

export const StyledCard = styled.div`
	max-width: 30%;
	height: 530px;
	background: ${WHITE_COLOR};
	border: 1px solid ${LIGHT_GREY_COLOR};
	box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
	border-radius: 5px;
	overflow: hidden;
	cursor: pointer;
`;

export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-between;
	padding: 0px;
	gap: 45px;
	margin: 50px 75px 45px 75px;
`;

export const CardDateContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 25px;
`;

export const CardDate = styled.div`
	font-size: 14px;
	color: ${DARK_GREY_COLOR};
	opacity: 0.6;
	margin-left: 10px;
`;

export const CardTitle = styled.p`
	font-size: 24px;
	line-height: 28px;
	color: ${DARK_GREY_COLOR};
	padding-left: 5px;
	margin: 20px 25px 20px 20px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;

export const CardDescription = styled.p`
	font-size: 16px;
	line-height: 24px;
	color: ${DARK_GREY_COLOR};
	margin: 25px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: 217px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const ReadMore = styled.p`
	font-weight: 700;
	font-size: 16px;
	line-height: 150%;
	color: ${DARK_GREY_COLOR};
`;

export const ReadMoreButton = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: 25px;
`;

export const ResultContainer = styled.div`
	border-bottom: 1px solid ${LIGHT_GREY_COLOR};
	margin: 40px 75px 45px 75px;
	padding-bottom: 5px;
`;

export const ResultTitle = styled.p`
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	color: ${DARK_GREY_COLOR};
`;

export const FilterDiv = styled.div`
	margin: 50px 75px 40px 75px;
	height: 80px;
	width: 600px;
`;

export const FilterContainer = styled.div`
	border: 1px solid ${LIGHT_GREY_COLOR};
	box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
	border-radius: 5px;
	padding: 13px 20px;
	background: ${WHITE_COLOR};
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const FilterTitle = styled.p`
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	color: ${DARK_GREY_COLOR};
	margin-bottom: 10px;
`;

export const FilterInput = styled.input`
	width: 100%;
	height: 24px;
	border: none;
	margin-left: 20px;
	&:focus {
		outline: none;
	}
	&::placeholder {
		font-size: 16px;
		line-height: 150%;
		color: gray;
	}
`;
