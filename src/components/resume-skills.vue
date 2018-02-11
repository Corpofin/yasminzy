<template>
<section class="mb-5">
  <h2 class="h6">DEVELOPMENT SKILLS</h2>

  <hr>

  <ol class="row">
    <li class="col-md-8 mb-3 mb-md-0">
      Technology

      <ul class="list-unstyled pr-5 text-muted">
        <li class="row" v-for="(item, index) in technology" v-bind:key="index">
          <span class="col-sm-4 small">{{ item. label }}</span>
          <div class="col-sm-8">
            <div class="progress">
              <div v-bind:class="'progress-bar bg-primary w-' + item.value" role="progressbar" v-bind:aria-valuenow="item.value" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </li>
      </ul>
    </li>

    <li class="col-md-4">
      Knowledge

      <ul class="list-unstyled text-muted">
        <li class="small" v-for="(item, index) in knowledge" v-bind:key="index">{{ item }}</li>
      </ul>
    </li>
  </ol>
</section>
</template>

<script>
export default {
  data() {
    return {
      technology: [
        { label: "HTML/CSS", value: 75 },
        { label: "JavaScript", value: 50 },
        { label: "Bootstrap", value: 75 },
        { label: "Sass", value: 50 },
        { label: "Vue.js", value: 75 },
        { label: "Git", value: 50 },
        { label: "PHP", value: 50 }
      ],
      knowledge: [
        "Responsive web design",
        "UX/UI",
        "Linux",
        "Image editing (GIMP)",
        "Video editing (Blender)"
      ]
    };
  }
};
</script>

<style scoped>

</style>
