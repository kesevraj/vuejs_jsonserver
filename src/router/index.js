import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/joblist',
    name: 'joblist',
  
    component: () => import( '../components/joblist.vue'),
    meta: { title: 'Job List' }
  },

  {
    path: '/recruiterpage',
    name: 'recruiterpage',
  
    component: () => import( '../components/recruiterpage.vue'),
    meta: { title: 'Recruiter Page' }
  },

  {
    path: '/canditatelogin',
    name: 'canditatelogin',
  
    component: () => import( '../components/canditatelogin.vue'),
    meta: { title: 'Canditate Login' }
  },

  {
    path: '/recruiterlogin',
    name: 'recruiterlogin',
  
    component: () => import( '../components/recruiterlogin.vue'),
    meta: { title: 'Recruiter Login' }
  },

  {
    path: '*',
    component: () => import('../components/Error404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
