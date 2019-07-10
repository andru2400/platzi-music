<template>
  <div id="app">
    <section class="section">
      <nav class="nav has-shadow">
        <div class="container">
          <input type="text" class="input is-large" placeholder="Buscar Canciones" v-model="searchQuery">
          <button class="button is-info is-large" @click="search">Buscar</button>
          <button class="button is-danger is-large">&times;</button>
        </div>
      </nav>
      <div class="container">
        <div class="columns">
          <div class="cloumn" v-for="t in tracks" v-bind:key="t.name">
            <h1 style="margin-top:50px">{{ t.name }} - {{ t.artist }}</h1>
          </div>
          <div v-text="searchMessage" style="margin-top:70px"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

 const tracks = [
   {name: 'Musica ligera', artist: 'Soda'},
   {name: 'Tren al sur', artist: 'Los p'},
   {name: 'Te llore como a un rio', artist: 'Mana'}
 ]

export default {
  name: 'app',
  data () {
    return {
      searchQuery:"",
      tracks: []
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    search () {
      this.tracks = tracks
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
