import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import personalCenter from "../views/PersonalCenter.vue";
import Info from "../views/PersonalCenter/Info.vue";
import Product from "../views/PersonalCenter/Products.vue";
import Record from "../views/PersonalCenter/Record.vue";
import Loginwithcode from "../views/Loginwithcode.vue";
import SetPassword from "../views/SetPassword.vue";
import FirstSet from "../views/FirstSet.vue";
import FindPassword from "../views/FindPassword.vue";
import AllProducts from "../views/Products.vue";
import ManyProducts from "../components/manyProducts.vue";

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
    path: "/findPassword",
    name: "FindPassword",
    component: FindPassword,
  },
  {
    path: "/firstSet",
    name: "FirstSet",
    component: FirstSet,
  },
  {
    path: "/loginwithcode",
    name: "LoginWithCode",
    component: Loginwithcode,
  },
  {
    path: "/setPassword",
    name: "SetPassword",
    component: SetPassword,
  },
  {
    path: "/products",
    name: "AllProducts",
    redirect: "/products/all",
    component: AllProducts,
    children: [
      {
        path: "all",
        component: ManyProducts,
      },
      {
        path: "jobs",
        component: ManyProducts,
      },
      {
        path: "pressure",
        component: ManyProducts,
      },
      {
        path: "personality",
        component: ManyProducts,
      },
    ],
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
