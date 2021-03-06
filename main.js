new Vue({
  el: '#root',
  data: {
    disks: [],
    selected: '',
    genres: ['All']
  },
  mounted() {
    const self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function(the) {
      for (var i = 0; i < the.data.response.length; i++) {
        self.disks.push(the.data.response[i])
        if (!self.genres.includes(the.data.response[i].genre)) {
          self.genres.push(the.data.response[i].genre)
        }
      }
    })
  }
});
Vue.config.devtools = true;
