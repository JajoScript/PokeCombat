import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'

// Fonts.
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

import '@fontsource/press-start-2p';
import '@fontsource-variable/handjet/full.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
