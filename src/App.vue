<template>
  <div id="app">
    <app-header></app-header>
    <router-view/> 
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/header.vue'
import AppFooter from './components/footer.vue'

export default {
  name: 'App',
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter
  },
}
</script>

<style>
@import './assets/css/reset.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
