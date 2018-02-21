<template>
<div>
  <home-header />
  <home-about />
  <home-projects />
  <!-- <home-testimonials /> -->
  <home-posts />
  <!-- <home-logos /> -->
</div>
</template>

<script>
import HomeAbout from "~/components/home-about";
import HomeHeader from "~/components/home-header";
import HomeLogos from "~/components/home-logos";
import HomePosts from "~/components/home-posts";
import HomeProjects from "~/components/home-projects";
import HomeTestimonials from "~/components/home-testimonials";

export default {
  components: {
    HomeAbout,
    HomeHeader,
    HomeLogos,
    HomePosts,
    HomeProjects,
    HomeTestimonials
  }
};
</script>

<style scoped>

</style>
