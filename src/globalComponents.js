import Vue from 'vue'

Vue.component('ylomi-header', () => import('@/components/Header.vue'))
Vue.component('ylomi-footer', () => import('@/components/Footer.vue'))
Vue.component('ylomi-promise', () => import('@/components/general/Promise.vue'))
Vue.component('ylomi-service', () => import('@/components/general/Service.vue'))
Vue.component('ylomi-city', () => import('@/components/general/City.vue'))
Vue.component('ylomi-professional', () => import('@/components/general/Professional.vue'))
