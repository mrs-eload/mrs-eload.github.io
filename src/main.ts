import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {gsap} from 'gsap'

import App from './App.vue'
import router from './router'
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
import {Physics2DPlugin} from "gsap/Physics2DPlugin";

gsap.registerPlugin(MorphSVGPlugin, Physics2DPlugin);
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
