<template>
<footer>
  <p>{{ text }}</p>

  <p class="mb-0 text-right">
    <nuxt-link class="btn btn-primary ml-auto" v-bind:to="to">
      {{ link }}
      <i class="icon ion-arrow-right-a"></i>
    </nuxt-link>
  </p>
</footer>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>

</style>
