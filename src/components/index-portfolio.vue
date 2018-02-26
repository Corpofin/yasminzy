<template>
<div class="wrapper" id="portfolio">
  <div class="content-wrapper">
    <h2 data-aos="fade">Best Work</h2>

    <ul>
      <li v-for="(item, index) in portfolio" v-bind:key="index">
        <div class="img-wrapper" data-aos="fade-left">
          <a v-bind:href="item.link">
            <img class="hvr hvr-grow" v-bind:src="'/img/' + item.img" v-bind:alt="item.title">
          </a>
        </div>

        <div class="text" data-aos="fade-right">
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
  data() {
    return {
      portfolio: [
        {
          title: "Toko Diba",
          img: "toko-diba.jpg",
          link: "https://www.tokodiba.com",
          description:
            "Website for a business providing various products and services. Tawk.to ready."
        },
        {
          title: "Azka Bakery",
          img: "azka-bakery-sample.png",
          link: "https://bakery-azka.netlify.com",
          description:
            "Sample ecommerce website built with Nuxt, Snipcart, and Bootstrap."
        },
        {
          title: "Tiara Restaurant",
          img: "tiara-restaurant-sample.jpg",
          link: "https://restaurant-tiara.netlify.com",
          description:
            "Sample restaurant SPA built with Vue and Bootstrap. Reservation system ready."
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

h2, .text {
  text-align: center;
}

ul {
  display: grid;
  grid-gap: calc(var(--space) * 2);
  list-style-type: none;
  padding-left: 0;
  margin-top: calc(var(--space) * 2);
}

li {
  display: grid;
  grid-gap: calc(var(--space) * 2);

  @media (--md) {
    grid-template-columns: repeat(2, 1fr);

    &:nth-child(odd) {
      & .img-wrapper {
        order: 1;
      }

      & .text {
        align-items: flex-end;
        text-align: right;
      }

      & p {
        margin-right: 0;
      }
    }

    &:nth-child(even) {
      & .img-wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
      }

      & .text {
        text-align: left;
      }

      & p {
        margin-left: 0;
      }
    }
  }
}

a {
  color: var(--black);
}

img {
  display: block;
  box-shadow: var(--shadow);
  margin: 0 auto;
  max-height: 300px;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h3 {
  font-size: 2.5rem;
}

p {
  color: var(--grey);
  margin-left: auto;
  margin-right: auto;
  max-width: 40ch;
}
</style>
