<template>
  <svg class="svg-icon main-icons" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>
<style scoped>
  .main-icons {
    width: 2.4rem;
    height: 2.4rem;
  }
</style>
