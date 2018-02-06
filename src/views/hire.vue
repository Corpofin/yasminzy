<template>
<div class="container-fluid py-5">
  <div class="container">
    <h1>Let’s work together</h1>
    <p class="text-muted">Tell me about your project.</p>

    <hr class="mb-4">

    <form name="hire" action="/sent" netlify>
      <div class="form-group">
        <label for="name">Name*</label>
        <input class="form-control rounded-0" id="name" type="text" required>
      </div>

      <div class="form-group">
        <label for="email">Email*</label>
        <input class="form-control rounded-0" id="email" type="email" aria-describedby="emailHelp" required>
        <small class="form-text text-muted" id="emailHelp">I'll never share your email with anyone else.</small>
      </div>

      <div class="form-group">
        <label for="website">Website</label>
        <input class="form-control rounded-0" id="website" type="text">
      </div>

      <div class="form-row">
        <legend class="col-form-label col-sm-12 pt-0">Budget*</legend>
        <div class="form-group col-4 col-sm-2">
          <select class="form-control rounded-0" id="currency">
            <option selected>USD $</option>
            <option>IDR Rp</option>
          </select>
        </div>
        <div class="form-group col-8 col-sm-10">
          <input class="form-control rounded-0" id="budget" type="number" required>
        </div>
      </div>

      <div class="form-group">
        <legend class="col-form-label pl-0">Target Project Length*</legend>
        <div class="form-check">
          <input class="form-check-input" id="option1" type="radio" name="projectLength" value="Less than 1 week">
          <label class="form-check-label" for="option1">
            Less than 1 week
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" id="option2" type="radio" name="projectLength" value="1 to 2 weeks" checked>
          <label class="form-check-label" for="option2">
            1 to 2 weeks
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" id="option3" type="radio" name="projectLength" value="Less than 1 month">
          <label class="form-check-label" for="option3">
            Less than 1 month
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="projectLength" id="option4" value="More than 1 month">
          <label class="form-check-label" for="option4">
            More than 1 month
          </label>
        </div>
      </div>

       <div class="form-group">
        <label for="details">Details*</label>
        <textarea class="form-control rounded-0" id="details" rows="3" required></textarea>
      </div>

      <p class="small text-muted">* Required</p>

      <button type="submit" class="btn btn-secondary rounded-0">
        <i class="icon ion-paper-airplane"></i>
        SEND
      </button>
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
