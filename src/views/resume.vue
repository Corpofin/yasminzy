<template>
<div class="container-fluid py-4">
  <div class="container">
    <h1 class="d-flex align-items-center">Resume
      <a class="btn btn-light btn-sm ml-3" href="resume.pdf" download="yasminzy-resume.pdf">
        <i class="h6 icon ion-ios-download-outline mr-1"></i>
        PDF
      </a>
    </h1>

    <p class="text-muted"></p>

    <hr class="mb-4">

    <div class="card" data-aos="slide-up">
      <div class="card-body row">

        <!-- <resume-header class="col-lg-12" />
        <resume-statement class="col-lg-6" />
        <resume-education class="col-lg-6" />
        <resume-specialties class="col-lg-6" />
        <resume-work class="col-lg-6" />
        <resume-skills class="col-lg-6" />
        <resume-recognitions class="col-lg-6" />
        <resume-language class="col-lg-6" />
        <resume-interests class="col-lg-6" /> -->

        <resume-header class="col-lg-12" data-aos="slide-down" />

        <div class="col-lg-6" data-aos="slide-left">
          <resume-statement />
          <resume-specialties />
          <resume-skills />
          <resume-language class="d-none d-sm-block" />
        </div>

        <div class="col-lg-6" data-aos="slide-right">
          <resume-education  />
          <resume-work />
          <!-- <resume-recognitions /> -->
          <resume-interests />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ResumeEducation from "@/components/resume-education";
import ResumeHeader from "@/components/resume-header";
import ResumeInterests from "@/components/resume-interests";
import ResumeLanguage from "@/components/resume-language";
import ResumeRecognitions from "@/components/resume-recognitions";
import ResumeSkills from "@/components/resume-skills";
import ResumeSpecialties from "@/components/resume-specialties";
import ResumeStatement from "@/components/resume-statement";
import ResumeWork from "@/components/resume-work";

export default {
  components: {
    ResumeEducation,
    ResumeHeader,
    ResumeInterests,
    ResumeLanguage,
    ResumeRecognitions,
    ResumeSkills,
    ResumeSpecialties,
    ResumeStatement,
    ResumeWork
  }
};
</script>

<style scoped>

</style>
