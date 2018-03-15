<template>
<div>
  <index-header />
  <index-about />
  <index-portfolio />
  <index-services />
  <index-contact-simple />
  <!-- <index-stat />
  <index-photo />
  <index-testimonials /> -->
  <index-logos />
  <index-videos />
  <index-contact-form />
  <index-footer />
</div>
</template>

<script>
import IndexHeader from "@/components/index-header";
import IndexAbout from "@/components/index-about";
import IndexPortfolio from "@/components/index-portfolio";
import IndexServices from "@/components/index-services";
import IndexContactSimple from "@/components/index-contact-simple";
import IndexStat from "@/components/index-stat";
import IndexPhoto from "@/components/index-photo";
import IndexTestimonials from "@/components/index-testimonials";
import IndexLogos from "@/components/index-logos";
import IndexVideos from "@/components/index-videos";
import IndexContactForm from "@/components/index-contact-form";
import IndexFooter from "@/components/index-footer";

export default {
  components: {
    IndexHeader,
    IndexAbout,
    IndexPortfolio,
    IndexServices,
    IndexContactSimple,
    IndexStat,
    IndexPhoto,
    IndexTestimonials,
    IndexLogos,
    IndexVideos,
    IndexContactForm,
    IndexFooter
  }
};
</script>

<style scoped>
</style>
