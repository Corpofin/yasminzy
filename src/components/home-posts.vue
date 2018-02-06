<template>
<div class="bg-light container-fluid mh-100 py-5 text-center">
  <div class="container">
    <span class="cursive text-primary">my blog</span>
    <h2 class="mb-5">- LATEST POSTS -</h2>

    <div class="row">
      <div class="col-md-6 col-lg-4" v-for="(item, index) in filter(posts, 4)" v-bind:key="index" v-on:click="$router.push('posts/' + urlize(item.title))">
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
</div>
</template>

<script>
import { filter, urlize } from "@/functions";
import { posts } from "@/data";

export default {
  data() {
    return {
      posts
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
