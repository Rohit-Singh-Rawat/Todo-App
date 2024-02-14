import { useState } from 'react';

export default function CreateTodo({ fetchfunc }) {
	const [newTodo, setNewTodo] = useState({
		title: '',
		description: '',
		completed: false,
	});
	function changeValue(e) {
		setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
	}
	async function addTodo() {
		if (newTodo.title.trim() === '' || newTodo.description.trim() === '') {
			return alert('Please fill out all fields');
		}
		try {
			const response = await fetch('http://localhost:3000/todo', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newTodo),
			});
			const { msg } = await response.json();
			console.log(msg);
			fetchfunc();
		} catch (error) {
			console.error('There was a problem sending the data:', error);
		}
	}
	return (
		<div className='todoBar'>
			<div>
				<input
					type='text'
					placeholder='Title'
					onChange={changeValue}
					name='title'
				/>
				<input
					type='text'
					placeholder='Description'
					onChange={changeValue}
					name='description'
				/>
			</div>

			<button onClick={addTodo}id='addBtn'>Add</button>
		</div>
	);
}
