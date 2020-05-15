import React, { useState } from 'react';

// Todo Component
function Todo({ todo, index}) {

	return <div className="todo">{todo.text}</div>;

}

// App Component
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

			{/* Generated Todo List */}
			<div className="todoList">

				{

					todos.map(
						
						(todo, index) => (

							<Todo key={index} index={index} todo={todo} />
							
						)
						
					)
					
				}

			</div>

		</div>

	)

}

export default App;
