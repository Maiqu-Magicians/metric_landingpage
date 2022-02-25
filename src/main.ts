import { createApp } from "vue";
import App from "./Landing.vue";
import router from "./router";
import store from "./store";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/fonts/fonts.css";
import "element-plus/theme-chalk/display.css";

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
