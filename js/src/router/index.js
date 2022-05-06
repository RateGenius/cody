import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import store from '@/store/index.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/data-tables-challenge',
    name: 'data-tables-challenge',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "data-tables-challenge" */ '@/components/DataTablesChallenge.vue'),
    beforeEnter: async (to, from, next) => {
      await store.dispatch('loadLoanApplications');

      next();
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
