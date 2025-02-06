<template>
  <div class="card w-75 main-card centered">
    <div class="card-body">
      <div class="row g-0 align-items-center">
        <div class="col">
          <h4 class="text-center mb-0 pb-0">
            {{ t('xSelectVisitType') }}
          </h4>
        </div>
      </div>
      <div class="mt-5 d-grid gap-2">
        <button class="btn brandPrimaryButton" @click="nextStep('reservationConfirmation')">
          {{ t('xIHaveAReservation') }}
        </button>
      </div>
      <div class="row mt-lg-3">
        <div class="col-lg-4 col-md-12 mt-3">
          <button class="btn brandOutlineButton h-100 w-100">
            {{ t('xBuyDayPass') }}
          </button>
        </div>
        <div class="col-lg-4 col-md-12mt-md-3 mt-3">
          <button class="btn brandOutlineButton h-100 w-100">
            {{ t('xBuyOvernightPass') }}
          </button>
        </div>
        <div class="col-lg-4 col-md-12 mt-3">
          <button class="btn brandOutlineButton h-100 w-100">
            {{ t('xBuyAnnualPass') }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

const nextStep = (step) => {
  router.push({ name: step })
}


</script>