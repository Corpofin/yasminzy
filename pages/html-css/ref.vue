<template>
<div>
  <h1>{{ title }}</h1>
</div>
</template>

<script>
import "prismjs/prism";
import "prismjs/themes/prism.css";

import Prism from "vue-prism-component";

export default {
  components: {
    Prism
  },
  data() {
    return {
      title: ""
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: ""
        }
      ]
    };
  },
  layout: "post"
};
</script>

<style scoped>

</style>
