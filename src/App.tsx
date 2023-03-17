import React, { useEffect } from 'react';
import { AppTitle } from 'src/components/AppTitle/AppTitle';
import { AuthButton } from 'src/components/AuthButton/AuthButton';
import { connector } from 'src/connector';
import './app.scss';

function App() {
	useEffect(() => {
		connector.restoreConnection();
	}, []);

	return (
		<div className=\"app\">\
		<div className=\"auth-button\">\
			<AuthButton />\
		</div>
		</div>
	);
}

export default App;
