<template>
<component v-bind:is="title" v-cloak />
</template>

<script>
import Post from "@/posts/post";

export default {
  name: "PostItem",
  components: {
    Post
  },
  data() {
    return {
      title: this.$route.params.title
    };
  }
};
</script>

<style scoped>

</style>
