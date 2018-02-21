<template>
<div class="d-flex flex-column mh-100">
  <app-nav />
  <div class="container-fluid py-4">
    <div class="container mx-auto">
      <nuxt data-aos="fade" />
    </div>
  </div>
  <app-footer />
</div>
</template>

<script>
import AppFooter from "~/components/app-footer";
import AppNav from "~/components/app-nav";

export default {
  components: {
    AppFooter,
    AppNav
  }
};
</script>

<style scoped>

</style>
