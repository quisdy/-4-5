Vue.createApp({
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
	},

	template: `
<span class="card_sb">
	<input 
    type="text" 
    placeholder="Название фильма"
    v-model="newMovie"
  >
  <button class="add_btn" @click="addMovie">Добавить в список</button>
</span>

  <ul>
    <li v-for="(movie, index) in movies" :key="index">
<span class="card_sb">
      {{ movie.title }}
      <button class="remove_btn" @click="removeMovie(index)">Удалить</button>
			</span>
    </li>
  </ul>
	`
}).mount('#app');