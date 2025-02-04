<template>
  <div>
    <nav class="navbar bg-paBrandWhite fixed-top mb-0 pb-0 pt-0 shadow-bottom">
      <div class="container-fluid mb-0 pb-0">
        <div class="navbar-brand">
          <img src="./assets/images/parksAutomationLogo.svg" alt="Parks Automation Logo" width="200" />
        </div>
        <div class="navbar-text">
          <h1 class="text-center">
            {{ t('xWelcomeToParkName', { parkName: getParkName() }) }}
          </h1>
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
    <div style="padding-top: 75px;">
    </div>
    <div style="padding-top: 5px;">
      <router-view></router-view>
    </div>
    <div id="footer" class="container-fluid fixed-bottom bg-paBrandWhite pt-2">
      <div class="row">
        <div class="col text-center">
          <p class="text-muted">© {{ getCurrentYear() }}
            <a href="https://parksautomation.com/" target="_blank">
              Parks Automation
            </a>
          </p>
        </div>
      </div>
    </div>
    <!-- <div id="backgroundImage">
      <img src="./assets/images/parksAutomationBackground.jpg" alt="Parks Automation Background" />
    </div> -->
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
  // router.push({ name: 'welcome' })
  //check the screen width and set the breakpoint
  // window.addEventListener('resize', syncWidth)
})

//remove the event listener when the component is unmounted
// onUnmounted(() => window.removeEventListener('resize', syncWidth))

//set the breakpoint to the innerWidth of the window on a resize event
// const syncWidth = (e) => {
//   screenBreakpoint.value = e.target.innerWidth
// }

const getCurrentYear = () => {
  return new Date().getFullYear()
}

const getParkName = () => {
  return 'Wildwood State Park'
}
</script>

<style lang="scss" scoped>
.shadow-bottom {
  box-shadow: 0px 2px #006400;
}

#backgroundImage {
  position: absolute;
  bottom: 0;
  // left: 0;
  // right: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.85;
}
</style>
