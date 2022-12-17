import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/homePage'
import allPackages from '@/components/viewAllPackages'
import register from '@/components/signUp'
import login from '@/components/loginEntity'
import indivPackage from '@/components/individualPackage'
import createPackage from '@/components/createNewPackage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/packages',
      name: 'allPackages',
      component: allPackages
    },
    {
      path: '/package/:name',
      name: 'package',
      component: indivPackage,
      params: true
    },
    {
      path: '/create-package',
      name: 'createPackage',
      component: createPackage,
      params: true
    },
    {
      path: '/sign-up',
      name: 'register',
      component: register
    },
    {
      path: '/log-in',
      name: 'login',
      component: login
    }
  ]
})
