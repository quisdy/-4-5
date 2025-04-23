const app = Vue.createApp({
	data() {
			return {
					newMovie: '',
					movies: [
							{ title: 'Интерстеллар' },
							{ title: 'Начало' }
					]
			}
	},
	methods: {
			addMovie() {
					if (this.newMovie.trim()) {
							this.movies.push({ title: this.newMovie });
							this.newMovie = '';
					}
			},
			removeMovie(index) {
					this.movies.splice(index, 1);
			}
	}
});

// Компонент для отображения списка
app.component('movie-list', {
	props: ['movies'],
	template: `
			<ul class="list">
			    <transition-group name="fade" tag="ul" class="list">
					<li v-for="(movie, index) in movies" :key="index">
							<span class="card_sb">
									{{ movie.title }}
									<button 
											class="remove_btn" 
											@click="$emit('remove', index)"
									>
											Удалить
									</button>
							</span>
					</li>
					    </transition-group>

			</ul>
	`
});


app.mount('#app');