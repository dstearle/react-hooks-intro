import React, { useState } from 'react';
import './App.css';

// Todo Component
function Todo({ todo, index}) {

	return <div className="todo">{todo.text}</div>;

}

// Todo Form Component
function TodoForm({addTodo}) {

	const [value, setValue] = useState('');

	// Function for when form is submitted
	const handleSubmit = e => {

		e.preventDefault();
		 
		// Prevents submission if a value is not provided
		if(!value) return;

		// The value to be submitted
		addTodo(value);

		// Resets the input value to empty
		setValue('');

	}

	return (

		<form onSubmit={handleSubmit}>

			<input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} />

		</form>

	)

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
			<div className="todo-list">

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
