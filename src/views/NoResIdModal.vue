<template>
  <div>
    <modal modalId="no-res-id-modal" :modalClass="'modal-fullscreen-md-down'">
      <modal-header :title="t('xLookupReservation')" icon="fa-solid fa-magnifying-glass">
        <button class="btn-close" @click="closeModal('no-res-id-modal')">
        </button>
      </modal-header>
      <modal-body>
        <div class="row g-0 mt-3">
          <div class="col-6 pe-1">
            <label for="firstName">{{ t('xFirstName') }}</label>
            <input type="text" id="firstName" class="form-control" :placeholder="t('xFirstName')" v-model="firstName" />

          </div>
          <div class="col-6 ps-1">
            <label for="lastName">{{ t('xLastName') }}</label>
            <input type="text" id="lastName" class="form-control" :placeholder="t('xLastName')" v-model="lastName" />
          </div>
        </div>
        <div class="row g-0 mt-2">
          <div class="col">
            <label for="email">{{ t('xEmail') }}</label>
            <input type="email" id="email" class="form-control" :placeholder="t('xEmail')" v-model="email" />
          </div>
        </div>
        <div class="row g-0 mt-2">
          <div class="col">
            <label for="phone">{{ t('xPhone') }}</label>
            <input type="tel" id="phone" class="form-control" :placeholder="t('xPhone')" v-model="phone" />
          </div>
        </div>
      </modal-body>
      <modal-footer>
        <button class="btn brandPrimaryButton" @click="lookupReservation()">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          {{ t('xLookupReservation') }}
        </button>
      </modal-footer>
    </modal>
  </div>
</template>

<script setup>
import { useReservationStore } from '@/stores'
import { closeModal } from '@/utils/mixins'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const reservationStore = useReservationStore()
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')

const lookupReservation = () => {
  const body = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value
  }
  reservationStore.lookupReservation(body).then((response) => {
    console.log(response)
  })
}
</script>