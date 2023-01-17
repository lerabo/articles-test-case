import { useEffect, useState } from 'react';
import { CardContainer } from 'components/Card/Card.styles';
import CartItem from 'components/Card/ui/CartItem';
import Filter from 'components/Card/ui/Filter';
import Result from 'components/Card/ui/Result';
import { useMemo } from 'react';
import { matchSorter } from 'match-sorter';

export interface Article {
	id: number;
	title: string;
	summary: string;
	imageUrl: string;
	publishedAt: Date;
}

const Card = () => {
	const [filter, setFilter] = useState<string | undefined>();
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_API}`, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(async response => await response.json())
			.then(data => {
				setArticles(data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const filterHandler = (filter: string | undefined) => {
		setFilter(filter);
	};

	const filtered = useMemo(
		() =>
			matchSorter(articles, filter ? filter : '', {
				keys: ['title', 'summary'],
				threshold: matchSorter.rankings.CONTAINS,
			}),
		[articles, filter],
	);

	return (
		<>
			<Filter onChange={filterHandler} />
			<Result results={filtered.length} />
			<CardContainer>
				{filtered.map((article: Article) => (
					<CartItem filter={filter} article={article} key={article.id} />
				))}
			</CardContainer>
		</>
	);
};

export default Card;
