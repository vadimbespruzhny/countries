import { createApp } from "vue";
import App from "@/App.vue";
import store from "@/store";
import "./assets/css/input.css";
import router from "@/router/index"

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
