import { createApp } from "vue";
import App from "./Landing.vue";
import router from "./router";
import VConsole from "vconsole";

import "element-plus/dist/index.css";
import "./assets/fonts/fonts.css";
import "element-plus/theme-chalk/display.css";
import { createPinia } from "pinia";

const vconsole = new VConsole();

createApp(App).use(createPinia()).use(router).mount("#app");
