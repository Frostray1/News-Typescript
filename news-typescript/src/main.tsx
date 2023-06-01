import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import LayoutComponent from './components/Layout/LayoutComponent.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
		<LayoutComponent>
			<App />
		</LayoutComponent>
	// </React.StrictMode>
);