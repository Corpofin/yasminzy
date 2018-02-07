<template>
<nav class="animated fadeInDown bg-light fixed-top navbar navbar-expand-lg navbar-light">
  <router-link class="navbar-brand" to="/">
    <img class="d-inline-block align-top" src="@/assets/logo.png" alt="Logo" width="30" height="30" />
    <span class="cursive">Yasmin ZY</span>
  </router-link>

  <button class="border-0 navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto w-auto">
      <li class="nav-item" v-for="(item, index) in menu" v-bind:key="index">
        <router-link class="nav-link" v-bind:to="to(item)">
          {{ item.label || item }}
        </router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          to: "/",
          label: "Home"
        },
        "Resume",
        "Services",
        "Projects",
        // "Posts",
        "Contact"
      ]
    };
  },
  methods: {
    to(input) {
      if (input.label) {
        return input.to;
      } else {
        return `/${input.toLowerCase()}`;
      }
    }
  }
};
</script>

<style scoped>

</style>
