import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'App';
import { persistor, store } from 'redux/store';

const rootElement = document.getElementById('root');
render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={<div>loading...</div>} persistor={persistor}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</StrictMode>,
	rootElement,
);
