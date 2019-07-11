<template>
  <div id="app">
    <pm-header></pm-header>
    <pm-footer></pm-footer>
  </div>
</template>

<script>
import PmFooter from '@/components/layout/Footer'
import PmHeader from '@/components/layout/Header'

export default {
  name: 'app',
  components: {
    PmFooter,
    PmHeader
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .is-active {
    border:3px #23d160 solid;
  }
</style>
