<template>
  <div class="d-flex flex-column mh-100">
    <app-nav />
    <router-view class="animated fadeIn" />
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
  background-color: #6c757d;
  color: white;
}

body {
  font-family: "Roboto", sans-serif;
  padding-top: 56px;
}

a:hover {
  text-decoration: none;
}

p {
  max-width: 80ch;
}

.cursive {
  font-family: "Shadows Into Light", cursive;
  letter-spacing: 0.125rem;
}

.fadeIn {
  animation-delay: 0.25s;
  animation-duration: 1s;
}

.mh-100 {
  min-height: calc(100vh - 56px);
}
</style>
