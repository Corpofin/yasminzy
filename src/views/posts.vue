<template>
<div class="container">
  <h1>Posts</h1>
  <p class="text-muted"></p>

  <hr class="mb-4">

  <div class="row">
    <div class="col-md-6 col-lg-4" v-for="(item, index) in posts" v-bind:key="index" v-on:click="$router.push('posts/' + urlize(item.title))">
      <div class="card  hvr-float mb-4 w-100">
        <img class="card-img-top" v-bind:src="'img/posts/' + urlize(item.title) + '.jpg'" v-bind:alt="item.title">

        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { urlize } from "@/functions";
import { posts } from "@/data";

export default {
  data() {
    return {
      posts
    };
  },
  methods: {
    urlize
  }
};
</script>

<style scoped>

</style>
