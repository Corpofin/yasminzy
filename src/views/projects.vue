<template>
<div class="container-fluid py-5">
  <div class="container">
    <h1>Projects</h1>
    <p class="text-muted"></p>

    <hr class="mb-4">

    <div class="row text-center">
      <div class="col-md-6 col-lg-4" v-for="(item, index) in projects" v-bind:key="index">
        <div class="border-0 card hvr-shadow mb-4 w-100">
          <a class="text-muted" v-bind:href="item.link">
            <img class="card-img-top" v-bind:src="'img/projects/' + urlize(item.title) + '.jpg'" v-bind:alt="item.title">

            <div class="card-body">
              <small class="text-muted">{{ item.type }}</small>
              <h5 class="card-title">{{ item.title }}</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { urlize } from "@/functions";
import { projects } from "@/data";

export default {
  data() {
    return {
      projects
    };
  },
  methods: {
    urlize
  }
};
</script>

<style scoped>

</style>
