<template>
    <div>
        <div id="container4" class="cont"><h1>Animacje</h1>
            <div id="btns"><!--byl but-->
                <button class="slideButton">Play</button>
            </div>
            <div class="box red"></div>
            <div class="box blue"></div>
            <div class="box lime"></div>
            <div class="box yellow"></div>
        <br><br><br><br>Czas trwania animacji
            <p id="animationTime"></p>
        </div>
        <div class="footer"></div>
    </div>
</template>

<!--<script>
import anime from 'animejs'
var t1
var t2
var timeResolution = document.querySelector('#animationTime')
export default {
  name: 'Container4',
  methods: {
    Slide: anime({
      targets: 'div.box',
      translateX: [
        { value: 200, duration: 500 },
        { value: 0, duration: 500 }
      ],
      rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
      },
      borderRadius: ['0%', '50%'],
      easing: 'easeInOutQuad',
      opacity: '0.3',
      begin: function () {
        t1 = performance.now()
      },
      complete: function () {
        t2 = performance.now()
        timeResolution.innerHTML = t2 - t1 + ' milisekund'
      },
      delay: function (el, i) { return i * 1000 },
      autoplay: false
    })
  }
}
document.querySelector('.slideButton').onclick = this.Slide.play
</script>-->
