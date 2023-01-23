import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { getTotalFiltered } from '../../../../helpers/getTotalFiltered';
import { Article } from '../../models';

const TotalWrapper = styled(Box)(() => ({
	height: 25,
	width: '100%',
	paddingBottom: 5,
	marginTop: 40,
	borderTop: 0,
	borderRight: 0,
	borderBottom: 1,
	borderLeft: 0,
	borderColor: '#EAEAEA',
	borderStyle: 'solid',
}));

type TotalProps = {
	articles: Article[];
	query: string;
};

const Total: React.FC<TotalProps> = ({ articles, query }) => {
	return (
		<TotalWrapper>
			<Typography fontWeight={'bold'}>
				Results: {getTotalFiltered(articles, query)}
			</Typography>
		</TotalWrapper>
	);
};

export default Total;
