<template>
  <div>
    <section class="hero is-success">
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <div class="nav-item">
                <strong>Platzi Music</strong>
              </div>
            </div>
            <div class="nav-right nav-menu">

            </div>
          </div>
        </header>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Platzi Music</h1>
          <h2 class="title">Canciones que estan Buenisimas</h2>
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
