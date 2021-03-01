const app = Vue.createApp({
	//setup data, functions etc here
	//template: '<h2> I am the template </h2>'
	data(){
		return {
			showBooks: true,
			title: "The Final Empire",
			author: "Brandon Sanderson",
			age: 45
		}
	},
	methods:{
		changeTitle(title){
			console.log("you clicked me");
			//this.title = "Words of Radiance"
			this.title = title;
		},
		toggleShowBooks(){
			this.showBooks = !this.showBooks;
		}
	}

});

//mounts the vue app to the specific id (or any selector)
app.mount("#app");


