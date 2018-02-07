<template>
<section class="mb-5">
  <h2 class="h6">MY SPECIALTIES</h2>

  <hr>

  <ul class="list-unstyled d-flex flex-wrap">
    <li class="d-flex flex-column justify-content-center align-items-center hvr-grow mr-2 mb-2" v-for="(item, index) in specialties" v-bind:key="index">
      <div class="border rounded-circle d-flex justify-content-center align-items-center p-3">
        <img class="img-fluid" v-bind:src="'img/svg/' + item.icon + '.svg'" v-bind:alt="item.label">
      </div>
      <p class="line mb-0 text-muted">|</p>
      <p class="mb-0 small text-muted">{{ item.label }}</p>
    </li>
  </ul>
</section>
</template>

<script>
export default {
  data() {
    return {
      specialties: [
        { label: "Single page app ", icon: "browser" },
        { label: "Static website", icon: "document" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
li {
  min-height: 6rem;
  min-width: 6rem;

  @media (min-width: 576px) {
    min-height: 8rem;
    min-width: 8rem;
  }
}

div {
  border-color: #6c757d !important;
}

img {
  height: 1.5rem;

  @media (min-width: 576px) {
    height: 2rem;
  }
}

p {
  max-width: 75%;
  text-align: center;
}

.line {
  font-size: 3rem;
  font-weight: 100;
  margin-top: -1.125rem;
}
</style>
