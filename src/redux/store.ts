import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { articleReducer } from 'redux/reducers/articleSlice';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	persistStore,
} from 'redux-persist';

const persistConfig = {
	key: 'article',
	storage,
};

const persistedReducer = persistReducer(persistConfig, articleReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
