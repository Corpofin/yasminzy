<template>
<div class="wrapper">
  <h1 class="animated jackInTheBox">yasmin<br>zulfati<br>yusrina</h1>

  <a class="btn btn-secondary" href="#portfolio" data-aos="fade-down" data-aos-delay="1000">SEE PROJECTS</a>
</div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@import "../variables.css";

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: var(--indigo);
  background-color: #3f51b5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23e8eaf6' fill-opacity='0.5'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  min-height: 100vh;
}

h1 {
  color: var(--white);
  font-size: 5rem;
  margin-bottom: var(--space);
  margin-top: 0;
  text-align: center;
  text-shadow: var(--shadow);
}

a:hover {
  border-color: var(--white);
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes jackInTheBox {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes jackInTheBox {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.jackInTheBox {
  -webkit-animation-name: jackInTheBox;
  animation-name: jackInTheBox;
}
</style>
