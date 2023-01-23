import { createAsyncThunk } from '@reduxjs/toolkit';
import * as serviceAPI from '../../API/service';

export const getArticlesOperation = createAsyncThunk(
	'articles/get',
	async () => {
		const response = await serviceAPI.getArticles();
		return response.data;
	}
);

export const getArticleByIdOperation = createAsyncThunk(
	'articleById/get',
	async (id: any) => {
		const response = await serviceAPI.getArticleById(id);
		return response.data;
	}
);
