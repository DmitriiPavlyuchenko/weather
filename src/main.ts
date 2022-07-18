import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import components from "@/components/ui";
import { createPinia } from "pinia";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(createPinia()).use(router).mount("#app");
