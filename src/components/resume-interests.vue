<template>
<section class="mb-5">
  <h2 class="h6">HOBBIES &amp; INTERESTS</h2>

  <hr>

  <ul class="list-unstyled d-flex flex-wrap">
    <li class="border rounded-circle d-flex flex-column hvr-float justify-content-center align-items-center mr-2 mb-2" v-for="(item, index) in interests" v-bind:key="index">
      <img class="img-responsive mb-2" v-bind:src="'img/svg/' + item.icon + '.svg'" v-bind:alt="item.label">
      <p class="mb-0 small text-muted">{{ item.label }}</p>
    </li>
  </ul>
</section>
</template>

<script>
export default {
  data() {
    return {
      interests: [
        { label: "Books", icon: "book" },
        { label: "Music", icon: "musical-note" },
        { label: "Personal Dev", icon: "person" },
        { label: "Video Editing", icon: "video" }
      ]
    };
  }
};
</script>

<style scoped>
li {
  min-width: 6rem;
  min-height: 6rem;
}

img {
  min-height: 1rem;
}
</style>
