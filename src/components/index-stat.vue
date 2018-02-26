<template>
<div class="wrapper">
  <div class="content-wrapper">
    <div data-aos="fade-down-right">
      <video></video>
    </div>

    <ul>
      <li v-for="(item, index) in stat" v-bind:key="index" data-aos="fade-down-left">
        <i v-bind:class="'icon ion-' + item.icon"></i>
        <p>{{ item.total }}<br>
          <span>{{ item.label }}</span>
        </p>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      stat: [
        {
          icon: "document",
          total: 0,
          label: "Lorem ipsum"
        },
        {
          icon: "document",
          total: 0,
          label: "Lorem ipsum"
        },
        {
          icon: "document",
          total: 0,
          label: "Lorem ipsum"
        },
        {
          icon: "document",
          total: 0,
          label: "Lorem ipsum"
        }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
@import "../variables.css";

.wrapper {
  background-color: var(--primary);
  text-align: center;
}

.content-wrapper {
  display: grid;
  grid-gap: calc(var(--space) * 2);

  @media (--lg) {
    grid-template-columns: repeat(2, 1fr);
  }
}

ul {
  display: grid;
  list-style-type: none;
  padding-left: 0;
  margin-top: calc(var(--space) * 2);
  max-width: 768px;
  margin-right: 0;

  @media (--sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}

li {
  color: var(--white);
  font-size: 2rem;
  padding: var(--space);

  & i {
    display: block;
    margin-bottom: var(--space);
  }

  & p {
    margin: 0;
  }

  & span {
    font-size: initial;
  }

  @media (--sm) {
    &:nth-child(1),
    &:nth-child(3) {
      border-right: 1px solid var(--white);
    }

    &:nth-child(1),
    &:nth-child(2) {
      border-bottom: 1px solid var(--white);
    }
  }
}
</style>
