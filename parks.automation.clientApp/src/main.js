import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Modal from './modules/modals/Modal.vue'
import ModalHeader from './modules/modals/ModalHeader.vue'
import ModalFooter from './modules/modals/ModalFooter.vue'
import ModalBody from './modules/modals/ModalBody.vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/styles/app.scss'
import i18n from './lang'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


const app = createApp(App)

app.use(createPinia())
library.add(fas, far, fab)
app.use(router)
app.use(Toast)
app.use(i18n)
//custom modal components
app.component('modal', Modal)
app.component('modal-header', ModalHeader)
app.component('modal-footer', ModalFooter)
app.component('modal-body', ModalBody)
//font awesome icon component
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
