const todoist = new Vue({
	el: "#todoisApp",
	data: {
		header: "Todoist App",
		state: 'default',
		newTodo: '',
		todos: [],
	},
	methods:{
		addTodo(newTodo){
			this.todos.push(this.newTodo);
			this.newTodo= '';
		},
		deleteTodo(){
			console.log(this.todo);
		},
		changeState(newState){
			this.state = newState;
			this.newState = '';
		}
	}
});