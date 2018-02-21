<template>
<article>
  <h1>{{ title }}</h1>

  <post-parts series="htmlCss" />

<!--
  😊😊😊😊😊
-->

  <h2>CSS Rules</h2>

  <p>CSS properties + values = CSS declaration<br>
    CSS declaration + selectors = CSS rule<br>
    CSS file = Collection of CSS rules
  </p>

  <p><strong>Properties</strong> are the stylistic features you want to change, <strong>values</strong> are how you want to change them, and <strong>selectors</strong> are the elements you're targeting. For example:
    <prism language="css">body {
  background-color: pink;
  color: white;
}</prism>
    This rule will make the <code>body</code> has a pink background with white text. <code>body</code> is the selector, <code>background-color</code> and <code>color</code> are the properties, and <code>pink</code> and <code>white</code> are the values.
  </p>

  <p>One way of using CSS for your page is by writing CSS inside <code>&lt;style&gt;</code> tag in <code>head</code>. For example:
    <prism>&lt;head&gt;
  ...
  &lt;style&gt;
    p {
      text-align: center;
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;p&gt;Paragraph&lt;/p&gt;
&lt;/body&gt;</prism>
  </p>

  <h2>Comments</h2>

  <p>You can write comments in CSS with <code>/*  */</code>. Everything inside those stars will be ignored by the browser. It's useful for testing your code - see the effect of your code by toogling the comment. In VS Code, you can use <kbd>Ctrl + /</kbd> to comment or uncomment code.</p>


  <post-footer text="" to="intro-html-css-4" link="Introduction to HTML and CSS (4/4)" />
</article>
</template>

<script>
import "prismjs/prism";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-css.min.js";

import PostFooter from "~/components/post-footer.vue";
import PostParts from "~/components/post-parts.vue";
import Prism from "vue-prism-component";

export default {
  components: {
    PostFooter,
    PostParts,
    Prism
  },
  data() {
    return {
      title: "Introduction to HTML and CSS (3/4)",
      desctiption: ""
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  },
  layout: "post"
};
</script>

<style scoped>

</style>
