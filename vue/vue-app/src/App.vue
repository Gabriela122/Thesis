<template>
  <div id="app">
    <Menu />
    <Home />
    <Container1 />
    <Container2 />
    <Container3 />
    <Container4 />
  </div>
</template>

<script>

import Menu from './components/Menu.vue'
import Home from './components/Home.vue'
import Container1 from './components/Container1'
import Container2 from './components/Container2'
import Container3 from './components/Container3'
import Container4 from './components/Container4'

export default {
  name: 'App',
  components: {
    Menu,
    Home,
    Container1,
    Container2,
    Container3,
    Container4
  }
}
</script>

<style lang="scss">
 @import './assets/style.css';
</style>
