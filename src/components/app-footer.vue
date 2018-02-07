<template>
<footer class="mt-auto text-center">
  <div class="bg-dark container-fluid py-5 text-white">
    <div class="container">
      <span class="cursive font-weight-bold text-primary">get in touch</span>
      <h2 class="mb-5">- CONTACT -</h2>

      <p class="mx-auto">
        <a class="text-light" href="mailto:yasmin@yasminzy.com">yasmin[at]yasminzy.com</a><br>

        <a class="text-light" href="tel=6285251982080">+62 852 5198 2080</a>
      </p>

      <ul class="list-unstyled d-flex justify-content-center">
        <li v-for="(item, index) in accounts" v-bind:key="index">
          <a class="text-light" v-bind:href="item.link">
          <i v-bind:class="'icon ion-' + item.icon + ' px-2'"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="bg-black container-fluid py-1">
    <div class="container">
      <small class="text-muted">&copy; 2018 All Rights Reserved</small>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  data() {
    return {
      accounts: [
        {
          icon: "social-github",
          link: "https://github.com/yasminzy"
        },
        {
          icon: "social-instagram",
          link: "https://www.instagram.com/yzyusrina/"
        },
        {
          icon: "social-twitter",
          link: "https://twitter.com/yzyusrina"
        },
        {
          icon: "social-youtube",
          link:
            "https://www.youtube.com/channel/UCDmPISxSI9P3VZOjAU5sPZw?view_as=subscriber"
        }
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
.bg-black {
  background-color: #212529;
}
</style>
