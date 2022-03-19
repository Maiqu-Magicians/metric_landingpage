import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/oauth2",
    name: "OAuth",
    component: () => import("./views/Login/Oauth.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("./views/Login/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("./views/Login/Register.vue"),
  },
  {
    path: "/findPassword",
    name: "FindPassword",
    component: () => import("./views/SetPassword/FindPassword.vue"),
  },
  {
    path: "/firstSet",
    name: "FirstSet",
    component: () => import("./views/SetPassword/FirstSet.vue"),
  },
  {
    path: "/loginwithcode",
    name: "LoginWithCode",
    component: () => import("./views/Login/Loginwithcode.vue"),
  },
  {
    path: "/setPassword",
    name: "SetPassword",
    component: () => import("./views/SetPassword/SetPassword.vue"),
  },
  {
    path: "/products",
    name: "AllProducts",
    redirect: "/products/all",
    component: () => import("./views/Products/Products.vue"),
    children: [
      {
        path: "all",
        component: () => import("./views/Products/All.vue"),
      },
      {
        path: "jobs",
        component: () => import("./components/ProductsListView.vue"),
      },
      {
        path: "pressure",
        component: () => import("./components/ProductsListView.vue"),
      },
      {
        path: "personality",
        component: () => import("./components/ProductsListView.vue"),
      },
    ],
  },
  {
    path: "/personalCenter",
    name: "Personal Center",
    component: () => import("./views/PersonalCenter.vue"),
    children: [
      {
        path: "info",
        component: () => import("./views/PersonalCenter/Info.vue"),
      },
      {
        path: "records",
        component: () => import("./views/PersonalCenter/Record.vue"),
      },
      {
        path: "products",
        component: () => import("./views/PersonalCenter/Products.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
