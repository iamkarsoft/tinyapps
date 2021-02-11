const todoist = new Vue({
	el: "#todoisApp",
	data: {
		header: "Todoist App",
		state: 'default',
		newTodo: '',
		todos: [

		],
	},
	methods:{
		addTodo(newTodo){
			this.todos.push({label:this.newTodo,purchased: false});
			this.newTodo= '';
		},
		deleteTodo(){
			console.log(this.todo);
		},
		changeState(newState){
			this.state = newState;
			this.newState = '';
		},
		togglePurchased(todo){
			todo.purchased =!todo.purchased;
		}
	}
});