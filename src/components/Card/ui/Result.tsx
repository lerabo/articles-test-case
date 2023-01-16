import { ResultContainer, ResultTitle } from 'components/Card/Card.styles';

interface ChildProps {
	results: number;
}

const Result = (props: ChildProps) => {
	const { results } = props;
	return (
		<ResultContainer>
			<ResultTitle>Results: {results}</ResultTitle>
		</ResultContainer>
	);
};

export default Result;
