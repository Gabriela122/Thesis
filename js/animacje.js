
var t1, t2,
  timeResolution = document.querySelector('#animationTime'),
  Slide = anime({
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

document.querySelector('.slideButton').onclick = Slide.play
