<template>
  <div class="modal-header align-items-center container-fluid" v-if="title">
    <h2 class="modal-title">
      <i v-if="icon" :class="icon"></i>
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