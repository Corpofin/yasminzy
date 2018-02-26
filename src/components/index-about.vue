<template>
<div class="content-wrapper">
  <h2 data-aos="fade">Web Developer</h2>

  <p data-aos="fade-up">I bring website design to life with the latest technology.</p>

  <ul>
    <li v-for="(item, index) in things" v-bind:key="index" data-aos="fade-down">
      <i v-bind:class="'icon ion-' + item.icon"></i>
      <h3>{{ item.heading }}</h3>
      <p v-html="item.text"></p>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      things: [
        {
          icon: "university",
          heading: "Education",
          text:
            "I am a Mechanical Engineering cumlaude graduate from ITK Balikpapan, ID."
        },
        {
          icon: "briefcase",
          heading: "Work",
          text:
            "I do freelance web development work. I am now looking for a full time developer job."
        },
        {
          icon: "code",
          heading: "Knowledge",
          text:
            "HTML5, CSS3, JavaScript, Vue/Nuxt.js, Bootstrap, Sass, PostCSS, Git, and Linux."
        }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
@import "../variables.css";

.content-wrapper {
  text-align: center;
}

h2 {
  font-size: 4rem;
  margin-top: 0;

  & span {
    font-size: 2rem;
  }
}

p {
  color: var(--grey);
  margin: 0 auto;
}

ul {
  display: grid;
  grid-gap: var(--space);
  list-style-type: none;
  padding-left: 0;
  margin-top: calc(var(--space) * 2);

  @media (--md) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: calc(var(--space) * 2);
  }
}

i {
  color: var(--primary);
  display: block;
  font-size: 3rem;
  margin-bottom: calc(var(--space) / 2);
  text-shadow: var(--shadow);
}
</style>
