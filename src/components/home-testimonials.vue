<template>
  <div class="container-fluid py-5 text-center">
    <div class="container">
      <span class="cursive text-primary">people say</span>
      <h2 class="mb-5">- TESTIMONIALS -</h2>

      <div class="carousel slide" data-ride="carousel" v-cloak>
        <div class="carousel-inner">
          <div class="carousel-item" v-for="(item, index) in filter(testimonials, 3)" v-bind:key="index">
            <blockquote class="blockquote">
              <p>{{ item.content }}</p>

              <footer class="blockquote-footer">
                <cite>{{ item.name }}</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { filter, urlize } from "@/functions";
import { testimonials } from "@/data";

export default {
  data() {
    return {
      testimonials
    };
  },
  mounted() {
    document.querySelector(".carousel-item").className += " active";
  },
  methods: {
    filter,
    urlize
  }
};
</script>

<style scoped>

</style>
