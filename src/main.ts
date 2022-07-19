import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/ui";
import { createPinia } from "pinia";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(createPinia()).mount("#app");
