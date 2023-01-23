import axios from 'axios';

const BASE_URL = 'https://api.spaceflightnewsapi.net/v3/articles';

const headers = {
	'Content-Type': 'application/json',
};

export const getArticles = () => {
	const path = BASE_URL + '?_limit=100';
	return axios.get(path, { headers });
};

export const getArticleById = (id: number) => {
	const path = BASE_URL + '/' + id;
	return axios.get(path, { headers });
};
