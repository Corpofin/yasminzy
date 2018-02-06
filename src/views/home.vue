<template>
<div>
  <home-header />
  <home-about />
  <home-projects />
  <home-testimonials />
  <home-posts />
  <home-contact />
</div>
</template>

<script>
import HomeAbout from "@/components/home-about";
import HomeContact from "@/components/home-contact";
import HomeHeader from "@/components/home-header";
import HomeProjects from "@/components/home-projects";
import HomePosts from "@/components/home-posts";
import HomeTestimonials from "@/components/home-testimonials";

export default {
  components: {
    HomeAbout,
    HomeContact,
    HomeHeader,
    HomeProjects,
    HomePosts,
    HomeTestimonials
  }
};
</script>

<style scoped>

</style>
