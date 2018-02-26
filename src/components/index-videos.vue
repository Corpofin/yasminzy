<template>
<div class="wrapper">
  <div class="content-wrapper">
    <h2 data-aos="fade">Latest Updates</h2>

    <div class="videos">
      <div data-aos="zoom-in-up">
        <iframe src="https://www.youtube-nocookie.com/embed/7pIpukw2qs4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>

      <div data-aos="zoom-in-down">
        <h3>Using PostCSS in a Vue Project</h3>
        <p>A wallpaper gallery demo using Vue and cssnext.</p>
      </div>

      <div data-aos="zoom-in-up">
        <iframe src="https://www.youtube-nocookie.com/embed/yVRN9Vg9gtU?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>

      <div data-aos="zoom-in-down">
        <h3>Fixing Error when Starting Nuxt</h3>
        <p>EADDRNOTAVAIL error when running the dev script after fresh install.</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@import "../variables.css";

.wrapper {
  background-color: var(--grey-100);
}

h2, h3, p {
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media (--lg) {
    text-align: left;
    margin-left: 0;
    margin-right: 0;
  }
}

.videos {
  display: grid;
  grid-gap: calc(var(--space) * 2);
  list-style-type: none;
  padding-left: 0;

  @media (--md) {
    grid-row-gap: var(--space);
    grid-template-columns: repeat(2, 1fr);

    & div:nth-child(1) {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    & div:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    & div:nth-child(3) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    & div:nth-child(4) {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
  }

  @media (--lg) {
    grid-row-gap: calc(var(--space) * 2);
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);

    & div:nth-child(1) {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }

    & div:nth-child(2) {
      grid-column: 2 / 4;
      grid-row: 1 / 2;
    }

    & div:nth-child(3) {
      display: flex;
      align-items: flex-end;
      grid-column: 3 / 4;
      grid-row: 2 / 4;
    }

    & div:nth-child(4) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      grid-column: 1 / 3;
      grid-row: 3 / 4;
      text-align: right;
    }
  }
}

video {
  box-shadow: var(--shadow);
  max-height: 300px;
}

h3 {
  font-size: 2.5rem;
}

p {
  color: var(--grey);
}
</style>
