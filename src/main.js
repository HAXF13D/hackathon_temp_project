import { createApp } from 'vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'



const app = createApp(App)

app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
  });
app.use(router)
app.mount('#app')
