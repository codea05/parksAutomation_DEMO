<template>
  <div id="app">
    <nav class="navbar paBrandWhiteBackground fixed-top mb-0 pb-0 pt-0 shadow-bottom navbar-expand-lg">
      <div class="container-fluid mb-0 pb-0">
        <div class="navbar-brand">
          <img src="./assets/images/parksAutomationLogo.svg" alt="Parks Automation Logo" width="200" />
        </div>
        <div class="d-flex">
          <div class="nav-item dropstart">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"
              alt="Language">

              <font-awesome-icon icon="fa-solid fa-language" />
              {{ $t('xLanguage') }}
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item dropdown">
                <a href="#">
                  {{ t('xEnglish') }}
                </a>
              </li>
              <li class="nav-item dropdown pt-2">
                <a href="#">
                  {{ t('xSpanish') }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div style="padding-top: 60px;">
      <router-view></router-view>
    </div>
    <div id="footer" class="container-fluid fixed-bottom">
      <div class="row">
        <div class="col text-center">
          <p class="text-muted">© {{ getCurrentYear() }} Parks Automation</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const { t } = useI18n()



onMounted(() => {
  router.push({ name: 'welcome' })
  //check the screen width and set the breakpoint
  // window.addEventListener('resize', syncWidth)
})

//remove the event listener when the component is unmounted
// onUnmounted(() => window.removeEventListener('resize', syncWidth))

//set the breakpoint to the innerWidth of the window on a resize event
const syncWidth = (e) => {
  screenBreakpoint.value = e.target.innerWidth
}

const getCurrentYear = () => {
  return new Date().getFullYear()
}
</script>

<style lang="scss" scoped>
.shadow-bottom {
  box-shadow: 0px 2px #006400;
}
</style>
