import Vue from 'vue'
import Router from 'vue-router'
import First from '../container/First.vue'
import Next from '../container/Next.vue'

Vue.use( Router )

export default new Router( {
  routes: [ {
    path: '/',
    component: First,
  }, {
    path: '/next',
    component: Next
  } ]
} )
