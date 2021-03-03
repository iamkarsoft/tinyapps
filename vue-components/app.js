
Vue.component('plan-picker', {
	template: '#plan-picker-template',
	data(){
		return{
			plans: ['Jude','Germain'],
		}
	}
})

Vue.component('click-counter',{
	template: '#click-counter-template',
	data (){
		return{
			count: 0,
		}
	}
})

Vue.component('plan',{
	template: '#plan-template',
	props: {
		name: {
			type: String,
			default: 'Brandt',
			required: true,
		},
		price: Number,
	}
})



const app = new Vue({
	el: "#app",
});