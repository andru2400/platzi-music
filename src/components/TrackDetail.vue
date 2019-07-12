<template>

  <div class="container">
    <div class="columns">
      <div class="column is-3 has-text-centered">
        <figure class="media-left">
          <p class="image">
            <img :src="track.album.images[0].url">
          </p>
          <p>
            <button class="button is-primary is-large">
              <span class="icon" @click="selectTrack"></span>
            </button>
          </p>
        </figure>
        <!-- <pm-track :track="track"></pm-track> -->
      </div>
      <div class="column is-8">
        <div class="panel">
          <div class="panel-heading">
            <h1 class="title">{{ track.name}}</h1>
          </div>
          <div class="panel-block">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <ul v-for="(v, k) in track" :key="k">
                    <li>
                      <strong>
                        {{ k }}:&nbsp;
                      </strong>
                      <span>
                        {{ v }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="level">
                <div class="level-left">
                  <a class="level-item"></a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import trackService from '@/services/track'
  import trackMixin from '@/mixins/track'
  // import PmTrack from '@/components/Track.vue'
  export default {
    mixins: [trackMixin],
    // components: { PmTrack },
    data(){
      return {
        track:{}
      }
    },
    created(){
      const id = this.$route.params.id
      // console.log(id)
      trackService.getById(id)
      .then(res => {
        this.track = res
      })
    }
  }
</script>

<style lang="scss" scoped>
  .columns {
    margin:20 px;
  }
</style>
