<template>
<section class="mb-5">
  <h2 class="h6">LANGUAGE SKILLS</h2>

  <hr>

  <div class="row">
    <chartjs-doughnut class="col-sm-6 mb-2 mb-sm-0" v-bind:datasets="indonesian.datasets" v-bind:labels="indonesian.labels" v-bind:option="indonesian.option"></chartjs-doughnut>

    <chartjs-doughnut class="col-sm-6" v-bind:datasets="english.datasets" v-bind:labels="english.labels" v-bind:option="english.option"></chartjs-doughnut>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      indonesian: {
        labels: ["Indonesian"],
        datasets: [
          {
            backgroundColor: ["#6c757d"],
            data: [100]
          }
        ],
        option: {
          title: {
            display: true,
            position: "bottom",
            text: "Mother language"
          }
        }
      },
      english: {
        labels: ["English"],
        datasets: [
          {
            backgroundColor: ["#6c757d", "#e9ecef"],
            data: [80, 20]
          }
        ],
        option: {
          title: {
            display: true,
            position: "bottom",
            text: "Advanced level"
          }
        }
      }
    };
  }
};
</script>


<style scoped>

</style>
