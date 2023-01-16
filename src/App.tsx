import { Route, Routes } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import ArticlePage from 'pages/ArticlePage';
import HomePage from 'pages/HomePage';

function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/:id" element={<ArticlePage />} />
			</Routes>
		</>
	);
}

export default App;
