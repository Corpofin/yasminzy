<template>
<div class="container-fluid mh-100 py-5">
  <div class="container d-flex flex-column justify-content-between mh-100">
    <div class="mb-5 text-center">
      <div data-aos="fade">
        <span class="cursive font-weight-bold text-primary">who i am</span>
        <h2 class="mb-3">- ABOUT ME -</h2>
      </div>

      <div data-aos="fade-left">
        <div class="img-wrapper">
          <img class="border hvr-grow img-fluid mb-3 rounded-circle" src="@/assets/yasmin.jpg" alt="">
        </div>

        <p class="text-center mx-auto">I'm a Freelance Web Developer based in Indonesia. I build beautiful Web user interfaces, with a focus on responsive design and performance, using the latest front-end design techniques. If you’re looking for someone who will also care about your project, then you’re in the right place.</p>

        <p class="cursive mx-auto my-3">Yasmin ZY</p>
      </div>

      <div data-aos="fade-right">
        <button class="btn btn-light mr-3" type="button" v-on:click="$router.push('resume')">MY RESUME</button>
        <button class="btn btn-primary" type="button" v-on:click="$router.push('hire')">HIRE ME</button>
      </div>
    </div>

    <div class="row" data-aos="fade-right">
      <div class="col-md-6 col-lg-4">
        <div class="border-0 card h-100 mb-4">
          <h3 class="bg-transparent border-bottom-0 card-header h5" data-aos="fade">EDUCATION &amp; JOB</h3>

          <div class="card-body" data-aos="fade-up-right">
            <small>June 2012 - Aug 2016</small>
            <h4 class="card-title h6 mb-1 text-primary">Mechanical Engineering</h4>
            <p class="card-text small text-muted">Institut Teknologi Kalimantan</p>

            <small>2016 - now</small>
            <h4 class="card-title h6 mb-1 text-primary">Freelance Web Developer</h4>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mt-md-4 mt-lg-0 order-md-last order-lg-0">
       <div class="border-0 card h-100 mb-4">
          <h3 class="bg-transparent border-bottom-0 card-header h5" data-aos="fade">WHAT I'M DOING</h3>

          <div class="card-body" data-aos="fade-up-right">
            <p class="card-text text-muted">I build Single Page Application - website that feels like an app - and static website. I also offer monthly maintenance service for the websites I developed.</p>

            <ul class="list-unstyled mb-4 row">
              <li class="col-sm-6 mb-3" v-for="(item, index) in services" v-bind:key="index">
                <router-link class="d-flex align-items-center text-dark" to="services">
                  <i v-bind:class="'h5 icon ion-' + item.icon + ' mb-0 mr-3 text-primary'" />

                  <p class="mb-0">{{ item.label }}<br>
                  <small>{{ item.sublabel }}</small></p>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="border-0 card h-100 mb-4">
          <h3 class="bg-transparent border-bottom-0 card-header h5" data-aos="fade">TECHNICAL SKILLS</h3>

          <div class="card-body" data-aos="fade-up-right">
            <ul class="list-unstyled">
              <li class="mb-3 row" v-for="(item, index) in skills" v-bind:key="index">
                <span class="col-sm-4 small">{{ item. label }}</span>
                <div class="col-sm-8">
                  <div class="progress">
                    <div v-bind:class="'progress-bar bg-primary w-' + item.value" role="progressbar" v-bind:aria-valuenow="item.value" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
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
          icon: "code",
          label: "Development",
          sublabel: "Website, SPA"
        },
        {
          icon: "settings",
          label: "Maintenance",
          sublabel: "Backup, update"
        }
      ],
      skills: [
        { label: "HTML/CSS", value: 75 },
        { label: "JavaScript", value: 50 },
        { label: "Sass", value: 50 },
        { label: "Vue.js", value: 75 }
      ]
    };
  }
};
</script>

<style scoped>
img {
  max-height: 4rem;
}
</style>
