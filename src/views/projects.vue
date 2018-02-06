<template>
<div class="container-fluid py-3">
  <div class="container">
    <h1>Projects</h1>
    <p class="text-muted"></p>

    <hr class="mb-4">

    <div class="row">
      <div class="col-md-6 col-lg-4" v-for="(item, index) in projects" v-bind:key="index">
        <div class="card hvr-float mb-4 w-100">
          <a class="text-muted" v-bind:href="item.link">
            <img class="card-img-top" v-bind:src="'img/projects/' + urlize(item.title) + '.jpg'" v-bind:alt="item.title">

            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
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
