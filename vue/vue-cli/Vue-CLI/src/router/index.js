import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Menu from '@/components/Menu'
import Home from '@/components/Home'
/* import Container1 from '@/components/Container1'
import Container2 from '@/components/Container2'
import Container3 from '@/components/Container3'
import Container4 from '@/components/Container4' */

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Menu},
    {path: '/', component: Home}
    /* {path: '/', component: Container1},
    {path: '/', component: Container2},
    {path: '/', component: Container3},
    {path: '/', component: Container4} */
  ]
})
