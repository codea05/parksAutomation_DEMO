<template>
  <div>
    <div class="card w-75 main-card centered">
      <div class="card-body">
        <div class="row g-0 align-items-center">
          <div class="col-auto mr-0 pr-0" style="z-index: 999;">
            <button type="button" class="btn btn-icon-button" @click="goBack">
              <font-awesome-icon icon="fa-solid fa-arrow-left" />
            </button>
          </div>
          <div class="col ml-0" style="margin-left: -44px;">
            <h3 class="text-center mb-0 pb-0">
              {{ t('xConfirmYourReservation') }}
            </h3>
          </div>
        </div>
        <div class="mt-3">
          <label for="reservationId">{{ t('xConfirmByResId') }}</label>
          <input type="text" id="reservationId" class="form-control" :placeholder="t('xReservationId')"
            v-model="resId" />
          <div class="mt-3 row">
            <div class="col"></div>
            <div class="col-auto align-items-center">
              <a @click="openModal('no-res-id-modal')">
                {{ t('xIDoNotHaveResId') }}
              </a>
            </div>
            <div class="col-auto">
              <button type="button" class="align-content-end btn brandPrimaryButton" @click="lookupResById">
                <font-awesome-icon icon="fa-solid fa-check" />
                {{ t('xConfirmReservation') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NoResIdModal />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReservationStore } from '@/stores'
import { useRouter } from 'vue-router'
import { openModal } from '@/utils/mixins'
import NoResIdModal from '@/views/NoResIdModal.vue'

const reservationStore = useReservationStore()
const { t } = useI18n()
const resId = ref('')
const router = useRouter()

const goBack = () => {
  router.push({ name: 'welcome' })
}

const lookupResById = () => {
  // call the API to look up the reservation by ID
  reservationStore.getReservationById(resId.value)
}
</script>
