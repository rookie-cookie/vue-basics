const app = Vue.createApp({
	//setup data, functions etc here
	//template: '<h2> I am the template </h2>'
	data(){
		return {
			url: "https://google.com",
			showBooks: true,
			title: "The Final Empire",
			author: "Brandon Sanderson",
			age: 45,

			//for mousemove
			x: 0,
			y: 0,

			books: [

				{ 
					title: 'name of the wind',
					author: 'patrick rothfuss',
					img: 'assets/1.jpeg',
					isFav: true
				},

				{ 
					title: 'the way of kings',
					author: 'Brandon Sanderson',
					img: 'assets/2.jpeg',
					isFav: false
				},

				{ 
					title: 'the final empire',
					author: 'Brandon Sanderson',
					img: 'assets/3.jpeg',
					isFav: true
				}

			]

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
		},
		handleEvent(e, data){
			console.log(e, e.type);
			if (data){
				console.log(data);
			}
		},
		handleMousemove(e){
			this.x = e.offsetX;
			this.y = e.offsetY;
		},
		toggleFav(book){
			book.isFav = !book.isFav;
		}
	},

	computed: {
		filteredBooks(){
			return this.books.filter((book) => book.isFav )
		}
	}

});

//mounts the vue app to the specific id (or any selector)
app.mount("#app");


