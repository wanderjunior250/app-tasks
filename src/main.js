import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Login from './components/AppLogin.vue';
import Tarefas from './components/AppTodo.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/', 
      component: App
    },
    {
      path: '/login', 
      component: Login
    },
    {
      path: '/tarefas', 
      component: Tarefas
    }
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});