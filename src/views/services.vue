<template>
<div class="container-fluid py-3">
  <div class="container">
    <h1>Services</h1>

    <hr class="mb-4">

    <div class="row">
      <div class="col-md-6 mb-4" v-for="(item, index) in services" v-bind:key="index">
        <div class="card h-100">
          <div class="card-header d-flex justify-content-between">
            <h3 class=" h5">{{ item.label }}</h3>

            <img class="img-responsive" v-bind:src="'img/svg/' +  item.icon + '.svg'" v-bind:alt="item.label">
          </div>

          <div class="card-body">
            <p class="card-text" v-html="item.text"></p>

            <ul class="card-text pl-4">
              <li v-for="(item, index) in item.features" v-bind:key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <p class="text-center mx-auto">
      <router-link class="btn btn-primary btn-lg mx-auto" to="hire">HIRE ME</router-link>
    </p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          icon: "browser",
          label: "Development",
          text:
            "I build <i>Single Page Application (SPA)</i> and static website. SPA is faster and feels like an app, but needs to have JavaScript enabled.<br><small>This website is an SPA.</small>",
          features: [
            "Page speed optimized.",
            "Looks beautiful and clean.",
            "Responsive, meaning it looks good on any screen size."
          ]
        },
        {
          icon: "cog",
          label: "Maintenance",
          text:
            "This is an optional monthly service for the websites I developed.",
          features: [
            "8 hours/month.",
            "Content updates.",
            "Monthly full site backup.",
            "Graphical and layout changes.",
            "Modifications to headers or footers."
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
