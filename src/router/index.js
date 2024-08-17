import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
 {
  path:"/auth",
  name:"Authentication",
  component:()=>import("../components/API/Authentication/AuthAPI.vue")
 }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
