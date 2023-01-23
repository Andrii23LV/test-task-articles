import {
	combineReducers,
	createReducer,
	PayloadAction,
} from '@reduxjs/toolkit';

const initialState = {
	articles: [],
	articleById: {},
};

const entities = createReducer<any>(initialState, {
	'articles/get/pending': (state) => state,
	'articles/get/fulfilled': (state, action: PayloadAction<any>) => ({
		...state,
		articles: action.payload,
	}),
	'articles/get/rejected': (state) => state,

	'articleById/get/pending': (state) => state,
	'articleById/get/fulfilled': (state, action: PayloadAction<any>) => ({
		...state,
		articleById: action.payload,
	}),
	'articleById/get/rejected': () => [],
});

const isLoading = createReducer(false, {
	'articles/get/pending': () => true,
	'articles/get/fulfilled': () => false,
	'articles/get/rejected': () => false,

	'articleById/get/pending': () => true,
	'articleById/get/fulfilled': () => false,
	'articleById/get/rejected': () => false,
});

const error = createReducer(null, {
	'articles/get/pending': () => null,
	'articles/get/fulfilled': () => null,
	'articles/get/rejected': (_, action) => action?.error?.message,

	'articleById/get/pending': () => null,
	'articleById/get/fulfilled': () => null,
	'articleById/get/rejected': (_, action) => action?.error?.message,
});

export const articlesReducer = combineReducers({
	entities,
	isLoading,
	error,
});
