import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login/Login.vue";
import Register from "../views/Login/Register.vue";
import personalCenter from "../views/PersonalCenter.vue";
import Info from "../views/PersonalCenter/Info.vue";
import Product from "../views/PersonalCenter/Products.vue";
import Record from "../views/PersonalCenter/Record.vue";
import Loginwithcode from "../views/Login/Loginwithcode.vue";
import SetPassword from "../views/SetPassword/SetPassword.vue";
import FirstSet from "../views/SetPassword/FirstSet.vue";
import FindPassword from "../views/SetPassword/FindPassword.vue";
import AllProducts from "../views/Products/Products.vue";
import ProductsListView from "../components/ProductsListView.vue";

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
        component: ProductsListView,
      },
      {
        path: "jobs",
        component: ProductsListView,
      },
      {
        path: "pressure",
        component: ProductsListView,
      },
      {
        path: "personality",
        component: ProductsListView,
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
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
