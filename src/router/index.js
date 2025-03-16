import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Deposit from "@/components/Deposit.vue";
import CreateAccount from "@/components/CreateAccount.vue";
import Historical from "@/components/Historical.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/deposit", component: Deposit },
  { path: "/createAccount", component: CreateAccount },
  { path: "/historical", component: Historical },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
