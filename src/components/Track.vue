<template>
  <div class="card" v-if="track && track.album">
    <div class="card-image">
      <figure class="image is-quarter">
        <img :src="track.album.images[0].url">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="track.album.images[0].url">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-6">
            <strong> {{track.name}} </strong>
          </p>
          <p class="subtitle is-6">
            {{ track.artists[0].name }}
          </p>
        </div>
      </div>
      <div class="content">
        <small> {{track.duration_ms | ms-to-mm }} </small>
        <nav class="level">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small" v-on:click="selectTrack">▶</span>
            </a>
            <a class="level-item">
              <span class="icon is-small" v-on:click="goToTrack(track.id)">🌎</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import trackMixin from '@/mixins/track'

  export default {
    mixins: [trackMixin],
    props:{
      track: { type: Object, required: true }
    },
    methods: {
      goToTrack (id) {
        this.$router.push({ name: 'track', params:{id:id} })
      }
    },
  }
</script>
