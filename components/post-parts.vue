<template>
<div class="dropdown show mb-5">
  <a class="btn btn-outline-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    See all parts
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <nuxt-link class="dropdown-item" v-for="(item, index) in parts[series]" v-bind:key="index" v-bind:to="item">
      Part {{ index + 1 }}
    </nuxt-link>
  </div>
</div>
</template>

<script>
export default {
  props: {
    series: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      parts: {
        htmlCss: [
          "intro-html-css-1",
          "intro-html-css-2",
          "intro-html-css-3",
          "intro-html-css-4"
        ]
      }
    };
  }
};
</script>

<style scoped>

</style>
