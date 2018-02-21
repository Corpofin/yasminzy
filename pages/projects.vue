<template>
<div class="container-fluid py-4">
  <div class="container">
    <h1>Projects</h1>
    <p class="text-muted"></p>

    <hr class="mb-4">

    <div class="row text-center">
      <div class="col-md-6 col-lg-4" v-for="(item, index) in projects" v-bind:key="index">
        <div class="border-0 card hvr-shadow mb-4 w-100">
          <a v-bind:href="item.link">
            <div class="img-wrapper" data-aos="zoom-in-up">
              <img class="card-img-top hvr-grow" v-bind:src="'img/projects/' + item.img" v-bind:alt="item.title">
            </div>

            <div class="card-body" data-aos="zoom-in-down">
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
import { projects } from "@/assets/js/data";

export default {
  data() {
    return {
      projects
    };
  }
};
</script>

<style scoped>

</style>
