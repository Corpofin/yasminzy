<template>
<article>
  <h1>{{ title }}</h1>

  <post-parts series="htmlCss" />

<!--
  😊😊😊😊😊
-->

  <!-- <post-footer text="" to="" link="" /> -->
</article>
</template>

<script>
import "prismjs/prism";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-css.min.js";

import PostFooter from "~/components/post-footer.vue";
import PostParts from "~/components/post-parts.vue";
import Prism from "vue-prism-component";

export default {
  components: {
    PostFooter,
    PostParts,
    Prism
  },
  data() {
    return {
      title: "Introduction to HTML and CSS (4/4)",
      desctiption: ""
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  },
  layout: "post"
};
</script>

<style scoped>

</style>
