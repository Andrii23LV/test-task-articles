import React from 'react';
import { Article } from '../modules/home/models';
import ArticleCard from '../modules/home/components/ArticleCard';

type FilterArticlesProps = {
	articles: Article[];
	query: string;
};

const FilterArticles: React.FC<FilterArticlesProps> = ({
	articles,
	query,
}): JSX.Element => {
	return (
		<React.Fragment>
			{articles
				?.filter(
					(article) =>
						query
							.split(' ')
							.some((el) =>
								article.title.toLocaleLowerCase().includes(el.toLowerCase())
							) ||
						query
							.split(' ')
							.some((el) =>
								article.summary.toLocaleLowerCase().includes(el.toLowerCase())
							)
				)
				.map((article) => {
					return (
						<ArticleCard article={article} query={query} key={article.id} />
					);
				})}
		</React.Fragment>
	);
};

export default FilterArticles;
