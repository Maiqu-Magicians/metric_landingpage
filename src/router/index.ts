import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import personalCenter from "../views/PersonalCenter.vue";
import Info from "../views/PersonalCenter/Info.vue";
import Product from "../views/PersonalCenter/Products.vue";
import Record from "../views/PersonalCenter/Record.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/personalCenter",
    name: "Personal Center",
    component: personalCenter,
    children: [
      {
        path: "info",
        component: Info,
      },
      {
        path: "records",
        component: Record,
      },
      {
        path: "products",
        component: Product,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
