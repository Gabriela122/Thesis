<template>
  <div>
    <div id="container1" class="cont">
      <h1>Procesy asynchroniczne</h1>
      <br />
      <button v-on:click="textDisplay1">Asynchroniczność</button>
      <div
        id="tekst1"
        style="display: none"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius dictum metus quis aliquet. Cras ac convallis nisl, venenatis</div>
      <br />
      <br />
      <div
        id="tekst2"
        style="display: none"
      >ngilla enim vulputate. Nulla facilisi. Aliquam erat volutpat. Morbi ut lacus ac nisi efficitur tristique. Quisque inte</div>
      <div id="asyncTime"></div>
      <br />
    </div>
    <div>
      <a href="#container2">
        <div class="arrow">
          <p class="arrow-para">V</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container1',
  methods: {
    async textDisplay1 () {
      var tekst2 = document.querySelector('#tekst2')
      var tekst1 = document.querySelector('#tekst1')
      var t = performance.now()
      var txt2 = await this.textDisplay2()
      tekst2.style.display = txt2
      tekst1.style.display = 'block'
      var time = performance.now() - t + 'milisekund'
      document.querySelector('#asyncTime').innerHTML = time
    },
    textDisplay2 () {
      return new Promise(resolve => setTimeout(() => { resolve('block') }, 0))
    }
  }
}
</script>