import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';

import App from 'src/app/App.jsx';
import store from 'src/app/store.js';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
