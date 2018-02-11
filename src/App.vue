<template>
<div class="d-flex flex-column mh-100">
  <app-nav />
  <router-view data-aos="fade" />
  <app-footer />
</div>
</template>

<script>
import AppFooter from "@/components/app-footer";
import AppNav from "@/components/app-nav";

export default {
  components: {
    AppFooter,
    AppNav
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}

::selection {
  background-color: #e91e63;
  color: white;
}

body {
  /* background-color: #f5f5f5; */
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
  padding-top: 56px;
}

p {
  max-width: 80ch;
}

.cursive {
  font-family: "Shadows Into Light", cursive;
  letter-spacing: 0.125rem;
}

.img-wrapper {
  display: inline-block;
  overflow: hidden;
}

.mh-100 {
  /* min-height: 100vh; */
  min-height: calc(100vh - 56px);
}
</style>
