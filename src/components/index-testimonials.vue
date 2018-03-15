<template>
<div class="wrapper">
  <div class="content-wrapper">
    <div>
      <h2 data-aos="fade">1 happy client</h2>

      <p data-aos="slide-down"><strong>Lorem ipsum dolor sit amet consectetur.</strong></p>

      <blockquote>
        <p data-aos="slide-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, corporis. Expedita numquam minus enim placeat reprehenderit, nulla magnam fugit, similique facere voluptatum accusantium illum, animi repudiandae assumenda itaque! Sunt, delectus!</p>

        <footer class="blockquote-footer" data-aos="slide-right">
          <cite>Source Title</cite> / Lorem, ipsum.
        </footer>
      </blockquote>
    </div>

    <div>
      <img src="" alt="">
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

.content-wrapper {
  display: grid;
  grid-gap: calc(var(--space) * 2);

  @media (--lg) {
    grid-template-columns: 2fr 1fr;
  }
}

blockquote {
  margin: 0;
  padding: 0;
  overflow-x: hidden;

  & p {
    color: var(--grey);
  }
}

cite {
  font-style: normal;
  font-weight: bold;
}
</style>
