<template>
<div class="wrapper">
  <div class="content-wrapper">
    <div>
      <h2 data-aos="fade">Hire Me</h2>

      <p data-aos="flip-down">Your online presence matters more than ever.</p>

      <div class="links" data-aos="flip-left">
        <a class="btn btn-primary" href="#contact">CONTACT ME</a>
        <a class="btn btn-secondary" href="https://tawk.to/chat/5a8d0fc1d7591465c707dc13/default/?$_tawk_popout=tru">ONLINE CHAT</a>
      </div>

      <p data-aos="flip-right">
        <a href="mailto:yasmin@yasminzy.com">yasmin@yasminzy.com</a>
      </p>
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
    grid-template-columns: repeat(2, 1fr);
  }
}

h2,
p {
  text-align: center;

  @media (--lg) {
    text-align: left;
  }
}

.links {
  display: flex;
  flex-wrap: wrap;
  margin: calc(var(--space) * 2) 0;

  & a {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: var(--space);
    @media (--lg) {
      margin-bottom: 0;
    }

    @media (--lg) {
      margin-left: 0;
    }
  }
}

p a {
  font-size: 1.5rem;
}
</style>
