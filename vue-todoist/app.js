const todoist = new Vue({
	el: "#todoisApp",
	data: {
		newTodo: '',
		todos: [],
	},
	methods:{
		addTodo(newTodo){
			this.todos.push(this.newTodo);
			this.newTodo= '';
		},
	}
});