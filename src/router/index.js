import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Deposit from '@/components/Deposit.vue';
import CreateAccount from '@/components/CreateAccount.vue';

const routes = [
  { path: '/', component: Home },
  { path: "/deposit", component: Deposit },
  { path: "/createAccount", component: CreateAccount }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

