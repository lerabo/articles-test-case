import { useState } from 'react';
import { FilterContainer, FilterTitle, FilterInput, FilterDiv } from 'components/Card/Card.styles';
import { Search } from 'akar-icons';

interface ChildProps {
	onChange: (name: string | undefined) => void;
}

const Filter = (props: ChildProps) => {
	const [filterValue, setFilterValue] = useState<string>('');

	const inputHandler = (event: any) => {
		props.onChange(event.target.value);
		setFilterValue(event.target.value);
	};
	return (
		<FilterDiv>
			<FilterTitle>Filter by keywords</FilterTitle>
			<FilterContainer>
				<Search style={{ color: 'gray', width: '20px', height: '20px' }} />
				<FilterInput placeholder="Search..." onChange={inputHandler} value={filterValue} />
			</FilterContainer>
		</FilterDiv>
	);
};

export default Filter;
