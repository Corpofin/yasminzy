<template>
<div class="container-fluid mh-100 py-5 text-center">
  <span class="cursive font-weight-bold text-primary">some works</span>
  <h2 class="mb-5">- MY PROJECTS -</h2>

  <div class="row">
    <div class="col-md-6 col-lg-4" v-for="(item, index) in filter(projects, 6)" v-bind:key="index">
      <div class="border-0 card hvr-shadow mb-4 w-100">
        <a class="text-dark" v-bind:href="item.link">
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
</template>

<script>
import { filter, urlize } from "@/functions";
import { projects } from "@/data";

export default {
  data() {
    return {
      projects
    };
  },
  methods: {
    filter,
    urlize
  }
};
</script>

<style scoped>

</style>
