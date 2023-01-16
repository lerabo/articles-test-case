import { ArrowLeft } from 'akar-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	saveCurrentArticleDescription,
	saveCurrentArticleId,
	saveCurrentArticleImageUrl,
	saveCurrentArticleTitle,
} from 'redux/reducers/articleSlice';
import {
	ArticleTitle,
	Header,
	HeaderImg,
	MainContainer,
	TextContainer,
	Text,
	BackToHomeButton,
	BackToHome,
} from 'components/Article/ArticleCard.styles';
import { RootState } from 'redux/store';
import { DARK_GREY_COLOR } from 'GlobalStyle';

const ArticleCard = () => {
	const article = useSelector((state: RootState) => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const homeHandler = () => {
		dispatch(saveCurrentArticleId(null));
		dispatch(saveCurrentArticleTitle(''));
		dispatch(saveCurrentArticleDescription(''));
		dispatch(saveCurrentArticleImageUrl(''));
		navigate('/');
	};

	return (
		<>
			<Header>
				<HeaderImg src={article.imageUrl} />
			</Header>
			<MainContainer>
				<ArticleTitle>{article.title}</ArticleTitle>
				<TextContainer>
					<Text>{article.summary}</Text>
				</TextContainer>
			</MainContainer>
			<BackToHomeButton onClick={homeHandler}>
				<ArrowLeft style={{ height: '12px', color: DARK_GREY_COLOR }} />
				<BackToHome>Back to home page</BackToHome>
			</BackToHomeButton>
		</>
	);
};

export default ArticleCard;
