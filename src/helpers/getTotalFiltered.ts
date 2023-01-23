import { Article } from '../modules/home/models';

export const getTotalFiltered = (
	articles: Article[],
	query: string
): number => {
	return articles?.filter(
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
	).length;
};
