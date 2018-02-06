<template>
<div class="container">
  <h1>Posts</h1>
  <p class="text-muted"></p>

  <hr class="mb-4">

  <div class="row">
    <div class="col-md-6 px-lg-5" v-for="(item, index) in posts" v-bind:key="index">
      <div class="border-left-0 border-right-0 border-top-0 card hvr-shadow mb-4 w-100">
        <router-link v-bind:to="'posts/' + urlize(item.title)">
          <img class="card-img-top" v-bind:src="'img/posts/' + urlize(item.title) + '.jpg'" v-bind:alt="item.title">

          <div class="card-body d-flex flex-column text-left">
            <small>
              {{ item.date }} / {{ item.tag }}
            </small>
            <h3 class="card-title h5 text-dark">{{ item.title }}</h3>
            <p class="card-text small text-muted">{{ item.description }}</p>

            <router-link class="d-flex align-items-center ml-auto small" to="'posts/' + urlize(item.title)">
              Read more —
            </router-link>
          </div>
        </router-link>
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
