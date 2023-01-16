import {
	StyledCard,
	CardTitle,
	CardDescription,
	CardDate,
	CardDateContainer,
	ImageContainer,
	Img,
	ReadMore,
	ReadMoreButton,
} from 'components/Card/Card.styles';
import dateFormat from 'dateformat';
import { Calendar, ArrowRight } from 'akar-icons';
import { useDispatch } from 'react-redux';
import {
	saveCurrentArticleDescription,
	saveCurrentArticleId,
	saveCurrentArticleImageUrl,
	saveCurrentArticleTitle,
} from 'redux/reducers/articleSlice';
import { useNavigate } from 'react-router-dom';
import Keywords from 'react-keywords';
import { Article } from 'components/Card/Card';
import { DARK_GREY_COLOR } from 'GlobalStyle';

interface Props {
	article: {
		id: number;
		title: string;
		summary: string;
		imageUrl: string;
		publishedAt: Date;
	};
	filter: string | undefined;
}

const CartItem = (props: Props) => {
	const { article, filter } = props;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const navigateHandler = (article: Article) => {
		dispatch(saveCurrentArticleId(article.id));
		dispatch(saveCurrentArticleTitle(article.title));
		dispatch(saveCurrentArticleDescription(article.summary));
		dispatch(saveCurrentArticleImageUrl(article.imageUrl));
		navigate(`${article.id}`);
	};

	return (
		<StyledCard onClick={navigateHandler.bind(this, article)}>
			<ImageContainer>
				<Img src={article.imageUrl} />
			</ImageContainer>
			<CardDateContainer>
				<Calendar
					strokeWidth={1}
					style={{ color: DARK_GREY_COLOR, width: '16px', height: '16px' }}
				/>
				<CardDate>{dateFormat(article.publishedAt, 'mmmm dS, yyyy')}</CardDate>
			</CardDateContainer>
			<CardTitle>
				<Keywords value={filter}>{article.title}</Keywords>
			</CardTitle>
			<CardDescription>
				<Keywords value={filter}>{article.summary}</Keywords>
			</CardDescription>
			<ReadMoreButton>
				<ReadMore>Read more</ReadMore>
				<ArrowRight style={{ height: '12px', color: DARK_GREY_COLOR }} />
			</ReadMoreButton>
		</StyledCard>
	);
};

export default CartItem;
