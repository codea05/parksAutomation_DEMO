<template>
  <div v-if="modalId" class="modal" :id="modalId" role="dialog">
    <div class="modal-dialog modal-dialog-centered" :class="setModalClass()">
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
//define props
const props = defineProps(['modalId', 'size', 'modalClass'])

const setModalClass = () => {
  let customModalStyle = ''
  if (props.size) {
    customModalStyle += props.size + ' '
  }
  if (props.modalClass) {
    customModalStyle += props.modalClass
  }
  return customModalStyle
}
</script>