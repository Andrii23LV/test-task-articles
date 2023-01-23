import React from 'react';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Article } from '../../models';
import ArticleCard from '../ArticleCard/ArticleCard';
import FilterArticles from '../../../../helpers/FilterArticles';

const ArticlesListWrapper = styled(Box)(() => ({
	paddingTop: 45,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	flexWrap: 'wrap',
	gap: 45,
}));

type ArticlesListProps = {
	articles: Article[];
	query: string;
};

const ArticlesList: React.FC<ArticlesListProps> = ({ articles, query }) => {
	return (
		<ArticlesListWrapper>
			{query ? (
				<FilterArticles articles={articles} query={query} />
			) : (
				articles?.map((article) => {
					return (
						<ArticleCard article={article} query={query} key={article.id} />
					);
				})
			)}
		</ArticlesListWrapper>
	);
};

export default ArticlesList;
