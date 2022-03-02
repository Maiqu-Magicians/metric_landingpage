import { createApp } from "vue";
import App from "./Landing.vue";
import router from "./router";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/fonts/fonts.css";
import "element-plus/theme-chalk/display.css";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(router).use(ElementPlus).mount("#app");
