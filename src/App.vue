<template>
<div>
  <router-view></router-view>
</div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
@import "./variables.css";

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

::selection {
  background-color: var(--primary);
  color: var(--white);
}

body {
  color: var(--black);
  font-family: "Roboto", system-ui;
  line-height: 1.5;
  max-width: 100vw;
  overflow-x: hidden;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: calc(var(--space) * 2) var(--space);
}

a {
  color: var(--primary);
  text-decoration: none;

  &:hover {
    color: var(--secondary);
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: var(--space);
}

h1 {
  font-size: 5rem;
}

h2 {
  font-size: 3rem;

  @media (--sm) {
    font-size: 4rem;
  }
}

h3 {
  font-size: 1.25rem;
}

p {
  max-width: 80ch;
  margin: 0 0 calc(var(--space) / 2);
}

img,
video {
  display: block;
  max-width: 100%;
  height: auto;
}

.btn {
  color: var(--primary);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  cursor: pointer;
  padding: var(--btn-padding);
}

.btn-primary {
  border: 2px solid var(--primary);
  background-color: var(--primary);
  color: var(--white);
  margin-right: var(--space);

  &:hover {
    border: 2px solid var(--primary);
    background-color: var(--white);
    color: var(--primary);
  }
}

.btn-secondary {
  border: 2px solid var(--primary);
  background-color: var(--white);

  &:hover {
    background-color: var(--primary);
    color: var(--white);
  }
}

.img-wrapper {
  display: inline-block;
  overflow: hidden;
}

iframe {
  min-height: 225px;
  width: 100%;
}

.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
