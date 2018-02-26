<template>
<div class="content-wrapper" id="contact">
  <h2 data-aos="fade">Get in touch</h2>

  <div class="contact">
    <div data-aos="zoom-in-left">
      <h3 data-aos="fade">How to find me</h3>

      <ul>
        <li data-aos="fade">Chat me
          <p><a href="https://tawk.to/chat/5a8d0fc1d7591465c707dc13/default/?$_tawk_popout=true">Tawk.to</a></p>
        </li>

        <li data-aos="fade">Email me
          <p><a href="mailto:yasmin@yasminzy.com">yasmin@yasminzy.com</a></p>
        </li>

        <li data-aos="fade">Location
          <p>Samarinda, Indonesia</p>
        </li>

        <li data-aos="fade">Hours
          <p>Mon to Fri 6AM to 6PM</p>
        </li>
      </ul>
    </div>

    <div data-aos="zoom-in-right">
      <h3 data-aos="fade">Send me message</h3>

      <form action="https://formspree.io/yasmin@yasminzy.com" method="POST" data-aos="fade">
        <input type="text" name="name" placeholder="Name">
        <input type="email" name="_replyto" placeholder="Email">
        <textarea name="message" placeholder="Message"></textarea>

        <input type="hidden" name="_next" value="https://www.yasminzy.com/thanks" />

        <button class="btn btn-secondary" type="submit" data-aos="fade">SEND MESSAGE</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@import "../variables.css";

h2 {
  text-align: center;
}

h3, li {
  text-align: center;

  @media (--lg) {
    text-align: left;
  }
}

.contact {
  color: var(--white);
  display: grid;
  grid-row-gap: var(--space);
  margin: 0 auto;
  max-width: 768px;

  & div {
    box-shadow: var(--shadow);
    padding: var(--space);

    &:nth-child(1) {
      background-color: var(--pink);
    }

    &:nth-child(2) {
      background-color: var(--primary);
    }
  }

  @media (--lg) {
    grid-template-columns: 1fr 2fr;
    box-shadow: var(--shadow);

    & div {
      box-shadow: none;
    }
  }
}

ul {
  list-style-type: none;
  padding-left: 0;

  @media (--sm) {
    display: grid;
    grid-column-gap: var(--space);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--lg) {
    grid-template-columns: 1fr;
  }
}

p {
  font-weight: bold;
}

a {
  color: var(--white);
}

input,
textarea {
  border: 2px solid var(--primary);
  padding: calc(var(--space) / 2);
  width: 100%;
  margin-bottom: var(--space);

  &:focus {
    border-color: var(--grey);
    outline: 0;
  }
}

button {
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    border-color: var(--white);
  }

  @media (--lg) {
    margin-left: 0;
  }
}
</style>
