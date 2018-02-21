<template>
<section class="mb-5">
  <div class="mb-sm-3">
    <h1 class="h5">Yasmin Zulfati Yusrina</h1>
    <p class="text-muted">Freelance Web Developer</p>
  </div>

  <div class="row text-muted">
    <p class="col-sm-3 col-md-4 col-lg-3 mb-0">Address</p>
    <p class="col-sm-9 col-md-8">
      Perjuangan Alam Segar&nbsp;II/7<br>
      75119<br>
      Samarinda, INDONESIA
    </p>
  </div>

  <div class="row order-md-1 order-xl-0 text-muted">
    <p class="col-sm-3 col-md-4 col-lg-3 mb-0">Contact</p>
    <p class="col-sm-9 col-md-8">
      <a href="mailto:yasmin@yasminzy.com">yasmin@yasminzy.com</a><br>
      <a href="tel:6285251982080">+62 852 5198 2080</a><br>
      <a href="https://twitter.com/yzyusrina">@yzyusrina</a>
    </p>
  </div>

  <div>
    <p>
      <a href="https://www.yasminzy.com">yasminzy.com</a>
    </p>
  </div>
</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
  }
}

div:last-of-type {
  @media (min-width: 1200px) {
    text-align: right;
  }
}

p {
  @media (min-width: 1200px) {
    font-size: 80%;
    font-weight: 400;
  }
}
</style>
