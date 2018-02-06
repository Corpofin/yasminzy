<template>
<div class="container-fluid py-3">
  <div class="container">
    <h1>Contact</h1>
    <p class="text-muted">This form is for general inquiry. Want to <router-link to="hire">hire me</router-link> instead?</p>

    <hr class="mb-4">

    <form name="contact" action="/sent" netlify>
      <div class="form-group">
        <label for="name">Name*</label>
        <input class="form-control" id="name" type="text" required>
      </div>

      <div class="form-group">
        <label for="email">Email*</label>
        <input class="form-control" id="email" type="email" aria-describedby="emailHelp" required>
        <small class="form-text text-muted" id="emailHelp">I'll never share your email with anyone else.</small>
      </div>

       <div class="form-group">
        <label for="message">Message*</label>
        <textarea class="form-control" id="message" rows="3" required></textarea>
      </div>

      <p class="small text-muted">* Required</p>

      <button type="submit" class="btn btn-primary">SEND</button>
    </form>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  max-width: 80ch;
}
</style>
