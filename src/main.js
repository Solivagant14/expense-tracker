import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { setupCalendar, Calendar, DatePicker } from 'v-calendar';

import VCalendar from 'v-calendar';

import 'v-calendar/style.css';

const app = createApp(App);
// app.use(PrimeVue,
//     {
//         // Default theme configuration
//         theme: {
//             preset: Aura,
//             options: {
//                 prefix: 'p',
//                 darkModeSelector: false ,
//                 cssLayer: false
//             }
//         }
// });

// use the components
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker)

app.mount("#app")


// Use VCalendar globally


