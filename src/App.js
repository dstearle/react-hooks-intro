import React, { useState } from 'react';

function App() {

	// State
	const [todos, setTodos] = useState([

		{
			text: 'Learn about React',
			isCompleted: false
		},

		{
			text: 'Learn about Angular',
			isCompleted: false
		},

		{
			text: 'Learn about Vue',
			isCompleted: false
		},

	]);

	// Markup
	return (

		<div className="app">


		</div>

	)

}

export default App;
