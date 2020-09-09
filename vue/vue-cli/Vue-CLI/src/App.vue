<template>
  <div id="app">
    <router-view/>
    <router-view name = "home"/>
    <router-view name = "container1"/>
    <router-view name = "container2"/>
    <router-view name = "container3"/>
    <!--<router-view name = "container4"/>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
