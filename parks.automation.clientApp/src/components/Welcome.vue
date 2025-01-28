<template>
  <div class="container">
    <h1 class="text-center">
      {{ t('xWelcomeToParkName', { parkName: getParkName() }) }}
    </h1>
    <h4 class="text-center">
      {{ t('xSelectVisitType') }}
    </h4>
    <div class="mt-5 d-grid gap-2">
      <button class="btn brandPrimaryButton">
        {{ t('xIHaveAReservation') }}
      </button>
    </div>
    <div class="row mt-3">
      <div class="col-4 text-center">
        <button class="btn brandOutlineButton">
          {{ t('xBuyDayPass') }}
        </button>
      </div>
      <div class="col-4 text-center">
        <button class="btn brandOutlineButton">
          {{ t('xBuyOvernightPass') }}
        </button>
      </div>
      <div class="col-4 text-center">
        <button class="btn brandOutlineButton">
          {{ t('xBuyAnnualPass') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const getParkName = () => {
  return 'THIS EXAMPLE PARK'
}

</script>