import React from 'react';
import { Card, Typography, CardMedia, CardContent, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import { Article } from '../../models';
import { formateDate } from '../../../../helpers/formateDate';

import ArrowRight from '../../../../icons/ArrowRight';
import Calendar from '../../../../icons/Calendar';
import { HighlightText } from '../../../../helpers/HighlightText';

const ArticleCardWrap = styled(Card)(() => ({
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'wrap',
	width: 398,
	boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
	border: '1px solid #EAEAEA',
}));

const CardBody = styled(CardContent)(() => ({
	display: 'flex',
	flexDirection: 'column',
	padding: 25,
	flex: 1,
}));

const DateWrap = styled(Box)(() => ({
	display: 'flex',
	gap: 10,
	fontSize: 14,
	color: 'rgba(54, 54, 54, 0.6)',
	marginBottom: 20,
}));

type ArticleCardProps = {
	article: Article;
	query: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article, query }) => {
	return (
		<ArticleCardWrap key={article.id}>
			<CardMedia
				component='img'
				height='217'
				width='400'
				image={article.imageUrl}
				alt={article.newsSite}
				loading='lazy'
			/>
			<CardBody>
				<DateWrap>
					<Calendar /> {formateDate(article.publishedAt)}
				</DateWrap>
				<Typography fontSize={24} lineHeight='normal' mb={2}>
					<HighlightText query={query}>{article.title}</HighlightText>
				</Typography>
				<Typography
					fontSize={16}
					color='#363636'
					pt={1}
					mb={'auto'}
					flexGrow={1}
				>
					<HighlightText query={query}>
						{article.summary.slice(0, 150)}
					</HighlightText>
					...
				</Typography>
				<Link
					to={`article/${article.id}`}
					style={{ textDecoration: 'none', display: 'inline' }}
				>
					<Typography mt={2} fontWeight='bold'>
						Read more <ArrowRight />
					</Typography>
				</Link>
			</CardBody>
		</ArticleCardWrap>
	);
};

export default ArticleCard;
