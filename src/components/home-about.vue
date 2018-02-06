<template>
<div class="container-fluid mh-100 py-5">
  <div class="container">
    <div class="mb-5 text-center">
      <span class="cursive text-bold text-primary">who i am</span>
      <h2 class="mb-5">- ABOUT ME -</h2>

      <p class="text-center mx-auto">I'm a Freelance Web Developer based in Indonesia. I build beautiful Web user interfaces, with a focus on responsive design and performance, using the latest front-end design techniques. If you’re looking for someone who will also care about your project - from design and user experience to clean code - then you’re in the right place.</p>

      <p class="cursive mx-auto my-4">Yasmin ZY</p>

      <button type="button" class="btn btn-secondary" v-on:click="$router.push('about')">MY RESUME</button>
      <button type="button" class="btn btn-primary" v-on:click="$router.push('hire')">HIRE ME</button>
    </div>

    <div class="row">
      <div class="col-md-6 col-lg-4">
        <div class="card h-100">
          <h3 class="card-header h5">EDUCATION &amp; JOB</h3>
          <div class="card-body">
            <small>June 2012 - Aug 2016</small>
            <h5 class="card-title">Mechanical Engineering</h5>
            <p class="card-text">Institut Teknologi Kalimantan</p>

            <small>2016 - now</small>
            <h5 class="card-title">Freelance Web Developer</h5>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mt-md-4 mt-lg-0 order-md-last order-lg-0">
        <div class="card h-100">
          <h3 class="card-header h5">WHAT I'M DOING</h3>
          <div class="card-body">
            <p class="card-text">I build Single Page Application - website that feels like an app - and static website. I also offer monthly maintenance service for the websites I developed.</p>

            <ul class="list-unstyled mb-4 row">
              <li class="col-sm-6 d-flex align-items-center" v-for="(item, index) in services" v-bind:key="index">
                <img class="img-responsive mr-3" v-bind:src="'img/svg/' + item.icon + '.svg'" v-bind:alt="item.label">
                <p class="mb-0">{{ item.label }}<br>
                <small>{{ item.sublabel }}</small></p>
              </li>
            </ul>

            <p class="text-center">
              <router-link class="btn btn-light btn-sm" to="services">LEARN MORE</router-link>
              </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="card h-100">
          <h3 class="card-header h5">TECHNICAL SKILLS</h3>
          <div class="card-body">
            <ul class="list-unstyled row">
              <li class="col-6 mb-1" v-for="(item, index) in skills" v-bind:key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
          sublabel: "Website, SPA"
        },
        {
          icon: "cog",
          label: "Maintenance",
          sublabel: "Backup, update"
        }
      ],
      skills: [
        "HTML/CSS",
        "JavaScript",
        "Bootstrap",
        "Sass",
        "Vue.js",
        "Quasar",
        "Git",
        "PHP",
        "Grunt"
      ]
    };
  }
};
</script>

<style scoped>

</style>
