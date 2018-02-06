<template>
  <div class="d-flex flex-column mh-100">
    <nav class="animated fadeInDown bg-light fixed-top navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" to="/">
        <img class="d-inline-block align-top" src="@/assets/logo.png" alt="Logo" width="30" height="30" /> Yasmin ZY
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="(item, index) in menu" v-bind:key="index">
            <router-link class="nav-link" v-bind:to="to(item)">{{ item.label || item }}</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view class="animated fadeIn" />

    <footer class="mt-auto">
      <div class="bg-dark container-fluid p-3 p-md-5">
        <ul class="list-unstyled d-flex flex-wrap">
          <li class="mr-3" v-for="(item, index) in accounts" v-bind:key="index">
            <a class="text-light" v-bind:href="item.link">{{ item.name }}</a>
          </li>
        </ul>

        <small class="text-muted">&copy; 2018 All Rights Reserved</small>
      </div>
    </footer>
  </div>
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
        "About",
        "Services",
        "Projects",
        "Posts",
        "Contact"
      ],
      accounts: [
        {
          name: "Github",
          link: "https://github.com/yasminzy"
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/yzyusrina/"
        },
        {
          name: "Twitter",
          link: "https://twitter.com/yzyusrina"
        },
        {
          name: "Youtube",
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

<style>
[v-cloak] {
  display: none;
}

body {
  font-family: "Roboto", sans-serif;
  padding-top: 56px;
}

a:hover {
  text-decoration: none;
}

p {
  max-width: 80ch;
}

img {
  min-height: 1rem;
}

.fadeIn {
  animation-delay: 0.25s;
  animation-duration: 1.5s;
}

.cursive {
  font-family: "Shadows Into Light", cursive;
}

.mh-100 {
  min-height: calc(100vh - 56px);
}
</style>
