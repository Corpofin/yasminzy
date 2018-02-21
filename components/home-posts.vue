<template>
<div class="container-fluid mh-100 py-5 text-center">
  <div class="container">
    <div data-aos="fade">
      <span class="cursive font-weight-bold text-primary">my blog</span>
      <h2 class="mb-5">- LATEST POSTS -</h2>
    </div>

    <div class="row">
      <div class="col-md-6 px-lg-5" v-for="(item, index) in filter(posts, 4)" v-bind:key="index">
        <div class="border-left-0 border-right-0 border-top-0 card hvr-shadow mb-4 w-100">
          <nuxt-link v-bind:to="urlize(item.category) + '/' + item.url">
            <div class="img-wrapper" data-aos="flip-up">
              <img class="card-img-top hvr-grow" v-bind:src="'/img/posts/' + item.url + '.png'" v-bind:alt="item.title">
            </div>

            <div class="card-body d-flex flex-column text-left" data-aos="flip-down">
              <small>
                {{ item.date }} / {{ item.category }}
              </small>
              <h3 class="card-title h5 text-dark">{{ item.title }}</h3>
              <p class="card-text small text-muted">{{ item.description }}</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { filter, urlize } from "@/assets/js/functions";
import { posts } from "@/assets/js/data";

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
