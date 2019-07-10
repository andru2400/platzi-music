<template>
  <div id="app">
      {{msg}}
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome de nuevo Andrés'
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
