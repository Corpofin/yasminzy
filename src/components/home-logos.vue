<template>
<div class="bg-light container-fluid py-5 text-center">
  <div class="container">
    <ul class="d-flex justify-content-between list-unstyled">
      <li v-for="(item, index) in logos" v-bind:key="index" data-aos="flip-left">
        <img class="img-fluid hvr-grow" v-bind:src="'img/logos/' + urlize(item) + '.png'" v-bind:alt="item">
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import { urlize } from "@/functions";
import { logos } from "@/data";

export default {
  data() {
    return {
      logos
    };
  },
  methods: {
    urlize
  }
};
</script>

<style scoped>

</style>
