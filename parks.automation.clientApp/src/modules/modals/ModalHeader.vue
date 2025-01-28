<template>
  <div class="modal-header align-items-center container-fluid bg-paBrandWhite" v-if="title">
    <h2 class="modal-title">
      <font-awesome-icon v-if="icon" :icon="icon" class="paBrandGreen"></font-awesome-icon>
      {{ title }}
    </h2>
    <!-- <button v-if="showDismissButton && modalId" class="btn-close" @click="closeModal(modalId)">
    </button> -->
    <slot></slot>
  </div>
</template>

<script setup>
import { closeModal } from '@/utils/mixins'
//define props
const props = defineProps(['title', 'icon', 'showDismissButton', 'modalId'])
</script>