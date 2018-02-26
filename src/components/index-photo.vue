<template>
<div class="content-wrapper">
    <span data-aos="slide-up">Y</span>
    <span data-aos="slide-up">Z</span>
    <span data-aos="slide-up">Y</span>
</div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@import "../variables.css";

.content-wrapper {
  color: var(--primary);
  display: flex;
  flex-wrap: wrap;
  font-size: 5rem;
  font-weight: bold;
  justify-content: space-between;

  @media (--sm) {
    font-size: 10rem;
  }

  @media (--md) {
    font-size: 15rem;
  }

  @media (--lg) {
    font-size: 20rem;
  }

  @media (--xl) {
    font-size: 25rem;
  }
}
</style>
