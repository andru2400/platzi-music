<template>
  <div>
    <pm-notification v-show="showNotification">
      <p slot="body">No se encontraron resultados</p>
    </pm-notification>
    <pm-loader v-show="isLoading"></pm-loader>
    <section v-show="!isLoading" class="section">
      <nav class="nav">
        <div class="container">
          <input type="text" class="input is-large" placeholder="Buscar Canciones" v-model="searchQuery" @keyup.enter="search">
          <button class="button is-info is-large" @click="search">Buscar</button>
          <button class="button is-danger is-large">&times;</button>
        </div>
      </nav>

      <div class="container">
        <p>
          <span v-text="searchMessage" style="margin-top:70px"></span>
        </p>
      </div>

      <div class="container">
        <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="t in tracks" v-bind:key="t.id">
              <pm-track :class="{'is-active':t.id == selectedTrack}" :track="t" v-on:select="setSelectedTrack"></pm-track>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import trackService from '@/services/track.js'

  import PmTrack from '@/components/Track.vue'
  import PmLoader from '@/components/shared/Loader.vue'
  import PmNotification from '@/components/shared/Notification.vue'

  export default {
    name: 'app',
    components: {
      PmTrack,
      PmLoader,
      PmNotification
    },
    data () {
      return {
        searchQuery:"",
        tracks: [],
        isLoading: false,
        selectedTrack: '',
        showNotification: false
      }
    },
    computed: {
      searchMessage () {
        return `Encontrados: ${this.tracks.length}`
      }
    },
    watch:{
      showNotification(){
        if(this.showNotification){
          setTimeout(() => {
            this.showNotification = false
          }, 3000);
        }
      }
    },
    methods: {
      search () {
        if(this.searchQuery == ''){return}

        this.isLoading = true

        trackService.search(this.searchQuery)
        .then(res =>{
          this.tracks = res.tracks.items
          this.isLoading = false
          console.log(this.tracks);
          this.showNotification = res.tracks.total === 0
        })
      },
      setSelectedTrack(id){
        this.selectedTrack = id
      }
    }
  }
</script>

<style lang="scss">

  .is-active {
    border:3px #23d160 solid;
  }

</style>
