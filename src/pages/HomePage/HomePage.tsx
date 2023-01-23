import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Total from '../../modules/home/components/Total';

import { getArticlesOperation } from '../../store/articles/articlesOperations';
import { AppDispatch } from '../../store/store';
import { articlesList } from '../../store/articles/articlesSelectors';
import ArticlesList from '../../modules/home/components/ArticlesList/ArticlesList';
import FindArticleForm from '../../modules/home/components/FindArticleForm';

const HomePageWrapper = styled(Box)(() => ({
	maxWidth: 1290,
	margin: 'auto',
	padding: 20,
}));

const HomePage: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const articles = useSelector(articlesList);

	const [query, setQuery] = useState<string>('');

	useEffect(() => {
		if (articles.length) return;
		dispatch(getArticlesOperation());
	}, [dispatch, query]);

	const handleArticleForm = (value: string, e?: React.MouseEvent): void => {
		e?.preventDefault();
		setQuery(value);
	};

	return (
		<HomePageWrapper>
			<Typography fontWeight={600}>Filter by keywords</Typography>
			<FindArticleForm handleArticleForm={handleArticleForm} />
			{!!query && <Total articles={articles} query={query} />}
			<ArticlesList articles={articles} query={query} />
		</HomePageWrapper>
	);
};

export default HomePage;
