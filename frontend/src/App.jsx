import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CreateTodo from './components/CreateTodo';
import Todos from './components/TodoList';

function App() {
	const [todos, setTodos] = useState([]);
	async function fetchTodo() {
		const response = await fetch('http://localhost:3000/todos');
		const data = await response.json();
		setTodos(data.todos);
	}
	console.log("ji")
	useEffect(() => {
		fetchTodo();
	}, []);

	return (
		<div>
			<h1>Todo App</h1>
			<CreateTodo fetchfunc={fetchTodo}></CreateTodo>
			<Todos
				todos={todos}
				fetchfunc={fetchTodo}
			></Todos>
		</div>
	);
}

export default App;
