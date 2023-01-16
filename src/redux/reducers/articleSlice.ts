import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IArticleState {
	id: number | null;
	title: string;
	summary: string;
	imageUrl: string;
	publishedAt: Date | null;
}

const initialState: IArticleState = {
	id: null,
	title: '',
	summary: '',
	imageUrl: '',
	publishedAt: null,
};

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		saveCurrentArticleId: (state, action: PayloadAction<number | null>) => {
			state.id = action.payload;
		},
		saveCurrentArticleTitle: (state, action: PayloadAction<string>) => {
			state.title = action.payload;
		},
		saveCurrentArticleDescription: (state, action: PayloadAction<string>) => {
			state.summary = action.payload;
		},
		saveCurrentArticleImageUrl: (state, action: PayloadAction<string>) => {
			state.imageUrl = action.payload;
		},
	},
});

export const {
	saveCurrentArticleId,
	saveCurrentArticleTitle,
	saveCurrentArticleDescription,
	saveCurrentArticleImageUrl,
} = articleSlice.actions;
export const articleReducer = articleSlice.reducer;
