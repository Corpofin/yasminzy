<template>
<article>
  <h1>{{ title }}</h1>

  <post-parts series="htmlCss" />

  <h2>Make a List</h2>
  <p>There are 2 kinds of list: unordered and ordered list.

  <h3>Unordered list</h3>
  <p>This is for seriess of items that don't have an order, like ingredient list. The list item is typically displayed with a bullet.
    <prism>&lt;ul&gt;
  &lt;li&gt;Avocado ½&lt;/li&gt;
  &lt;li&gt;Banana 1&lt;/li&gt;
  &lt;li&gt;Chocolate milk 1 cup&lt;/li&gt;
&lt;/ul&gt;</prism></p>

  <p>Result:
    <ul>
      <li>Avocado ½</li>
      <li>Banana 1</li>
      <li>Chocolate milk 1 cup</li>
    </ul>
  </p>

    <h3>Ordered list</h3>
    <p>This is for items that needs to be in order, for example cooking steps. The list item is typically numbered.
      <prism>&lt;ol&gt;
  &lt;li&gt;Add avocado, banana, and chocolate milk to blender and blend until smooth.&lt;/li&gt;
  &lt;li&gt;Pour into glass.&lt;/li&gt;
  &lt;li&gt;Enjoy!&lt;/li&gt;
&lt;/ol&gt;</prism></p>

  <p>Result:
    <ol>
      <li>Add avocado, banana, and chocolate milk to blender and blend until smooth.</li>
      <li>Pour into glass.</li>
      <li>Enjoy!</li>
    </ol>
  </p>

<!--
  😊😊😊😊😊
-->

  <h2>Create a Link</h2>
  <p>To create a link, you need to use anchor element <code>a</code>. For example:
    <prism>&lt;a href="https://antergos.com/"&gt;Antergos official website&lt;/a&gt;</prism></p>

  <p>Result: <a href="https://antergos.com/">Antergos official website</a></p>

  <p>You can make the link open in a new tab by adding the <code>target</code> attribute:
    <prism>&lt;a href="https://antergos.com/" target="_blank"&gt;Antergos official website&lt;/a&gt;</prism></p>

  <p>Result: <a href="https://antergos.com/" target="_blank">Antergos official website</a></p>

<!--
  😊😊😊😊😊
-->

  <h2>Add an Image</h2>
  <p>You've seen the syntax in the previous part. To add an image you can use the <code>img</code> element:
    <prism>&lt;img src="https://placeimg.com/400/225/nature" alt="Nature"&gt;</prism>
  </p>

  <p>Result:
    <img src="https://placeimg.com/400/225/nature" alt="Nature">
  </p>

  <p><code>src</code> is the source attribute. It's where you put the URL of the image, like <code>href</code> inside <code>a</code>. <code>alt</code> stands for alternative description. It's important for the people who use screen readers. It's useful for everyone because if the image failed to load, it'll be shown so people can still know what the image is about.</p>

<!--
  😊😊😊😊😊
-->

  <h2>File Paths</h2>
  <p>There are 2 kinds of file paths: absolute and relative paths.

  <h3>Absolute Path</h3>
  <p>This is the full URL to a file. The link and image source above use an absolute path.</p>

  <h3>Relative Path</h3>
  <p>This is the path that's relative to the current page.</p>

  <p>Say you have this folder structure:
    <img src="~/assets/img/file-tree-terminal.png" alt="File tree in terminal">
  </p>

    <p>You're in the <code>index.html</code> file and you want to create a link to the about and post page. This is how you do it:
      <prism>&lt;!-- index.html --&gt;
&lt;a href="about.html"&gt;About me&lt;/a&gt;
&lt;a href="blog/post.html"&gt;See blog post&lt;/a&gt;</prism>
    </p>

    <p>Now you're in the <code>about.html</code> file and you want to add an image from the <code>img</code> folder. Same thing. Here's how:
      <prism>&lt;!-- about.html --&gt;
&lt;img src="img/avatar.jpg" alt="Photo of me"&gt;</prism>
    </p>

    <p>What if you want to create links to the <code>index.html</code> and <code>about.html</code> pages from the <code>post.html</code> file?
      <prism>&lt;!-- post.html --&gt;
&lt;a href="../index.html"&gt;Go to home page&lt;/a&gt;
&lt;a href="../about.html"&gt;About me&lt;/a&gt;</prism>
    </p>

    <p>By the way, you can use <code>&lt;!-- --&gt;</code> to write comments in HTML. The browser won't read the content there.</p>

<!--
  😊😊😊😊😊
-->

  <h2>Mockup to Website</h2>

  <p>Time for practice. Using everything you've learned so far, build a webpage like this:
    <img class="img-fluid" src="~/assets/img/recipe-page.png" alt="Recipe page">
  </p>

  <p>
    <a class="btn btn-outline-primary" href="/img/posts/vegan-parmesan.jpg" download>
      Download picture
      <i class="icon ion-ios-download"></i>
    </a>
  </p>

  <p>The link at the bottom should link to <a href="https://tasty.co/recipe/vegan-parmesan">https://tasty.co/recipe/vegan-parmesan</a>.</p>

  <details>
    <summary class="text-primary">See the code</summary>
    <prism>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;
  &lt;title&gt;Vegan Parmesan&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;h1&gt;Vegan Parmesan&lt;/h1&gt;

  &lt;img src="vegan-parmesan.jpg" alt="Vegan parmesan"&gt;

  &lt;h2&gt;Ingredients&lt;/h2&gt;
  &lt;p&gt;for 4 servings&lt;/p&gt;
  &lt;ul&gt;
    &lt;li&gt;1 cup raw unsalted cashew&lt;/li&gt;
    &lt;li&gt;4 tablespoons nutritional yeast&lt;/li&gt;
    &lt;li&gt;1 teaspoon garlic powder&lt;/li&gt;
    &lt;li&gt;1 teaspoon salt&lt;/li&gt;
    &lt;li&gt;¼ teaspoon black pepper&lt;/li&gt;
  &lt;/ul&gt;

  &lt;h2&gt;Preparation&lt;/h2&gt;
  &lt;ol&gt;
    &lt;li&gt;Combine all ingredients in food processor and processor until well mixed and incorporated.&lt;/li&gt;
    &lt;li&gt;Enjoy!&lt;/li&gt;
  &lt;/ol&gt;

  &lt;p&gt;Source:
    &lt;a href="https://tasty.co/recipe/vegan-parmesan"&gt;Tasty&lt;/a&gt;
  &lt;/p&gt;
&lt;/body&gt;

&lt;/html&gt;</prism>
  </details>

<!--
  😊😊😊😊😊
-->

  <post-footer text="That wasn''t so hard, was it? Next, you'll start learning CSS." to="intro-html-css-3" link="Introduction to HTML and CSS (3/4)" />
</article>
</template>

<script>
import "prismjs/prism";
import "prismjs/themes/prism.css";

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
      title: "Introduction to HTML and CSS (2/4)",
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
