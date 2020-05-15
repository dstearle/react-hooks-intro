import React, { useState } from 'react';
import './App.css';

// Todo Component
function Todo({ todo, index, completeTodo, removeTodo}) {

	return <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
		
			{/* Text */}
			{todo.text}

			{/* Complete Button */}
			<div><button onClick={() => completeTodo(index)}>Complete</button></div>

			{/* Remove Button */}
			<div><button onClick={() => removeTodo(index)}>X</button></div>

		</div>;

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

	// Method for adding todos
	const addTodo = text => {

		const newTodos = [...todos, {text}];

		setTodos(newTodos);

	}

	// Method for marking off todos
	const completeTodo = index => {

		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);

	}

	// Method for removing todos from the list
	const removeTodo = index => {

		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);

	}

	// Markup
	return (

		<div className="app">

			<div className="todo-list">

				{/* Generated Todo List */}
				{todos.map(
						
					(todo, index) => (

						<Todo 
							key={index} 
							index={index} 
							todo={todo} 
							completeTodo={completeTodo}
							removeTodo={removeTodo}
						/>
						
					)
					
				)}

				{/* Todo Form */}
				<TodoForm addTodo={addTodo} />

			</div>

		</div>

	)

}

export default App;
