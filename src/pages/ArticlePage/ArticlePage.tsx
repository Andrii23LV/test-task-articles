import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ArticleBody from '../../modules/article/components/Article/ArticleBody';
import BackgroundImage from '../../modules/article/components/BackgroundImage';

import { getArticleByIdOperation } from '../../store/articles/articlesOperations';
import { articleItem } from '../../store/articles/articlesSelectors';
import { AppDispatch } from '../../store/store';

const ArticlePage = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { id } = useParams();

	const article = useSelector(articleItem);

	useEffect(() => {
		dispatch(getArticleByIdOperation(id));
	}, []);

	return (
		<React.Fragment>
			<BackgroundImage url={article.imageUrl} newsSite={article.newsSite} />
			<ArticleBody article={article} />
		</React.Fragment>
	);
};

export default ArticlePage;
