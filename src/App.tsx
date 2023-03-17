import React, { useEffect } from 'react';
import { AppTitle } from 'src/components/AppTitle/AppTitle';
import { TxForm } from 'src/components/TxForm/TxForm';
import { connector } from 'src/connector';
import './app.scss';

function App() {
	useEffect(() => {
		connector.restoreConnection();
	}, []);

	return (
		<div className=\"app\">
		<header>
			<AppTitle />
		</header>
		<div className=\"auth-button\">
		<main>
			<AuthButton />
		</main>
		</div>
	);
}

export default App;
