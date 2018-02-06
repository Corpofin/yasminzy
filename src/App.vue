<template>
  <div class="d-flex flex-column mh-100">
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

    <router-view class="animated fadeIn" />

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
        "Resume",
        "Services",
        "Projects",
        "Posts",
        "Contact"
      ],
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

<style>
[v-cloak] {
  display: none;
}

::selection {
  background-color: #6c757d;
  color: white;
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

.bg-black {
  background-color: #212529;
}

.cursive {
  font-family: "Shadows Into Light", cursive;
  letter-spacing: 0.125rem;
}

.fadeIn {
  animation-delay: 0.25s;
  animation-duration: 1s;
}

.mh-100 {
  min-height: calc(100vh - 56px);
}
</style>
