<template>
  <div>
    <section class="hero is-success global">
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <div class="nav-item">
                <strong class="pt">PLATZI-MUSIC</strong>

                <!-- <router-link to="/" class="nav-item">Buscar</router-link>
                <router-link to="about" class="nav-item">Nosotros</router-link> -->
              </div>
            </div>
            <div class="nav-right nav-menu">

            </div>
          </div>
        </header>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">@ndruMusic</h1>
          <h2 class="title">🍄Musica sin limites!</h2>
          <pm-player></pm-player>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PmPlayer from '@/components/Player'
  export default {
    components: {
       PmPlayer
    }
  }
</script>

<style lang="scss">
.global {
    background-image: url("http://3.bp.blogspot.com/_eYNXA0gKwI0/TRt2HOZ6dZI/AAAAAAAAAEc/XTJ6tn2TL1o/s1600/Dusty+Guitar+Music+Desktop+HD+Wallpaper+1920x1080+greatguitarsound.blogspot.com.jpg");
}

.pt{
  margin:10px;
  color:#ff0000;
}

</style>
