import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      props: []
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }
  ]
})
