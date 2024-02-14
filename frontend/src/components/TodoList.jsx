export default function Todos({ todos, fetchfunc }) {
	async function completeTodo(id) {
		try {
			const response = await fetch('http://localhost:3000/completed', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id: id,
				}),
			});
			const { msg } = await response.json();
			console.log(msg);
			fetchfunc();
		} catch (error) {
			console.error('There was a problem sending the data:', error);
		}
	}
	async function deleteTodo(id){
		try {
			const response = await fetch('http://localhost:3000/deleted', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id: id,
				}),
			});
			const { msg } = await response.json();
			console.log(msg);
			fetchfunc();
		} catch (error) {
			console.error('There was a problem sending the data:', error);
		}
	}
	return (
		<div id='container'>
			{todos.map((todo) => {
				return (
					<div
						key={todo._id}
						className='todo'
					>
						<div className='header'>
							<h3
								className='todoTitle'
								style={{
									textDecoration: todo.completed ? 'line-through' : 'none',
									color: todo.completed ? '#757676' : '',
								}}
							>
								{todo.title}
							</h3>
							<h4
								className='todoDescription'
								style={{
									textDecoration: todo.completed ? 'line-through' : 'none',
									color: todo.completed ? '#757676' : '',
								}}
							>
								{todo.description}
							</h4>
						</div>
						<div className='btns'>
							<button
								className='completeBtn'
								style={{ display: todo.completed ? 'none' : '' }}
								onClick={() => completeTodo(todo._id)}
							>
								Completed
							</button>
							<button
								className='deleteBtn'
								onClick={() => deleteTodo(todo._id)}
							>
								Delete
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
