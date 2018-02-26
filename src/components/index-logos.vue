<template>
<div class="content-wrapper">
  <ul>
    <li v-for="(item, index) in logos" v-bind:key="index" data-aos="zoom-in">
      <img v-bind:src="'/img/' + item.img + '.jpg'" v-bind:alt="item.name">
      <p>{{ item.name }}</p>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        {
          img: "document",
          name: "Lorem Ipsum"
        },
        {
          img: "document",
          name: "Lorem Ipsum"
        },
        {
          img: "document",
          name: "Lorem Ipsum"
        },
        {
          img: "document",
          name: "Lorem Ipsum"
        },
        {
          img: "document",
          name: "Lorem Ipsum"
        },
        {
          img: "document",
          name: "Lorem Ipsum"
        },
        {
          img: "document",
          name: "Lorem Ipsum"
        },
        {
          img: "document",
          name: "Lorem Ipsum"
        }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
@import "../variables.css";

.wrapper {
  background-color: var(--grey-100);
}

ul {
  display: grid;
  grid-gap: var(--space);
  grid-template-columns: repeat(2, 1fr);
  list-style-type: none;
  margin-top: calc(var(--space) * 2);
  padding-left: 0;

  @media (--sm) {
    grid-template-columns: repeat(4, 1fr);
  }
}

li {
  display: grid;
  grid-gap: calc(var(--space) / 2);
  text-align: center;
}

p {
  color: var(--grey);
}
</style>
