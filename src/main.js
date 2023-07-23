import { createApp } from 'vue'
import plugin from "@/components/plugins/plugin";
import App from './App.vue'

const app = createApp(App)



app.use(plugin).mount("#app");