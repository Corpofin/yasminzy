<template>
<div class="wrapper">
  <div class="content-wrapper">
    <div data-aos="fade">
      <h2>My Projects</h2>

      <p><router-link to="/">
        <i class="icon ion-arrow-left-a"></i>
        BACK
      </router-link></p>
    </div>

    <ul>
      <li v-for="(item, index) in projects" v-bind:key="index">
        <div class="img-wrapper" data-aos="zoom-out-up">
          <a v-bind:href="item.link">
            <img class="hvr hvr-grow" v-lazy="'/img/' + item.img" v-bind:alt="item.title">
          </a>
        </div>

        <div class="text" data-aos="zoom-out-down">
          <h3>
            <a v-bind:href="item.link">{{ item.title }}</a>
          </h3>
          <p>{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.getters.projects;
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../variables.css";

h2,
.text {
  text-align: center;
}

ul {
  display: grid;
  grid-gap: calc(var(--space) * 2);
  list-style-type: none;
  padding-left: 0;
  margin: calc(var(--space) * 2) 0;

  @media (--md) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}

li {
  display: grid;
  grid-gap: var(--space);

  & a {
    color: var(--black);
  }

  & img {
    display: block;
    box-shadow: var(--shadow);
    margin: 0 auto;
    max-height: 300px;
  }

  & .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & h3 {
    margin-bottom: calc(var(--space) / 2);
  }

  & p {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
