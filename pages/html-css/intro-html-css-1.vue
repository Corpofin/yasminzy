<template>
<article>
  <h1>{{ title }}</h1>

  <!-- <post-parts series="htmlCss" /> -->

  <h2>What is HTML and CSS?</h2>
  <div class="d-flex justify-content-around display-1 my-3">
    <i class="icon ion-social-html5"></i>
    <i class="icon ion-social-css3"></i>
  </div>

  <p>HTML (the Hypertext Markup Language) is the building block of the Web. It describes the content of a webpage. You can use HTML to write text, add a bulleted list, embed images and videos, and so on.</p>

  <p>CSS (Cascading Style Sheets) is a stylesheet language. It describes how elements should be rendered. You can use CSS to style webpages, for example, to change the font, color, or add animations.</p>

<!--
  😊😊😊😊😊
-->

  <h2>Text Editor and Browser</h2>
  <div class="d-flex">
    <img class="img-fluid logo" src="~/assets/img/vscode-logo.jpg" alt="VS Code logo">
    <img class="img-fluid logo" src="~/assets/img/chrome-logo.jpg" alt="Google Chrome logo">
    <img class="img-fluid logo" src="~/assets/img/firefox-logo.jpg" alt="Mozilla Firefox logo">
  </div>

  <p>Before you start learning HTML and CSS, you need to set up your development environment. The first 2 you need are text editor and browser. You can use text editor to write code. The browser will then run the code.</p>

  <p>For the text editor, I recommend <a href="https://code.visualstudio.com/">Visual Studio Code</a> (VS Code). VS Code is a free code editor available on Linux, Mac, and Windows. It has IntelliSense, which provides smart completions, support for debugging, and built-in Git. You can also install extensions to use additional services.</p>

  <p>For the browser, you need to install <a href="https://www.google.com/chrome/browser/desktop/">Google Chrome</a> and <a href="https://www.mozilla.org/">Mozilla Firefox</a>. They have robust tools for developers (DevTools). They also are the 2 most popular cross-platform browsers.</p>

<!--
  😊😊😊😊😊
-->

  <h2>Workflow</h2>
  <p>You can write code inside VS Code, save the file, open the file in Google Chrome, and refresh the page when you make changes. The problem is, it's tedious. It'd be better to see changes in the browser right after you finished writing code.</p>

  <p>So instead of doing it the manual way, you can use a VS Code extension called <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Live Server</a>.
    <img class="img-fluid" src="~/assets/img/install-live-server-vscode.png" alt="Install Live Server in VS Code"></p>

  <p>After you install it, make a folder for this tutorial anywhere you like. Open the folder in VS Code. Make a new <code>index.html</code> file then type <code>!</code> and press <kbd>Enter</kbd> there.</p>

  <p>Your <code>index.html</code> should have this now:
<prism>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;
  &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;/body&gt;

&lt;/html&gt;</prism>
  </p>

  <p>That's your first HTML code! Now click <code>Go Live</code> in the status bar. It'll launch <a href="http://localhost:5500"><code>localhost:5500</code></a> in your default browser.
    <img class="img-fluid" src="~/assets/img/go-live-vscode.png" alt="Go Live in VS Code"></p>

  <p>Now, when you edit the file, you can see the changes right away (it's better to have VS Code and Google Chrome open side by side).</p>

  <p>Try it. Between <code>&lt;body&gt;</code> and <code>&lt;/body&gt;</code> (the <code>body</code> tags), write this:
    <prism>&lt;h1&gt;Heading&lt;/h1&gt;</prism>
  </p>

  <p>Do you see this in the browser? If so, great, it works!
    <img class="img-fluid" src="~/assets/img/h1-browser.jpg" alt="h1 in browser">
  </p>

  <p>Notice that the content in the <code>title</code> tag shows up in the browser tab.</p>

<!--
  😊😊😊😊😊
-->

  <h2>HTML Structure</h2>
  <p>The code just now is an HTML element. <code>h</code> stands for heading. There are 6 headings in HTML (<code>h1</code> to <code>h6</code>) and <code>h1</code> is the biggest one. You call <code>&lt;h1&gt;</code> an <code>h1</code> tag. There are many tags in HTML. For example, you use <code>&lt;p&gt;</code> tag to write paragraph and <code>&lt;img&gt;</code> tag to insert image:
    <prism>&lt;p&gt;Paragraph&lt;/p&gt;
&lt;img src="image.jpg" alt="Image"&gt;</prism>
  </p>

  <p>Most elements have 2 tags, an opening tag and a closing tag. The only difference is that the closing tag has a slash in it. However, there are some elements, like images, that don't have a closing tag. You can omit the closing tag or write a slash before the second angle bracket, like so:
    <prism>&lt;img src="image.jpg" alt="Image" /&gt;</prism>
  </p>

  <p>You can find all HTML elements in the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">MDN HTML Element Reference</a> page. Don't worry, you don't have to memorize all that. In fact, you most likely only need to use less than half of it. Keep writing the code and you'll remember them in no time.</p>

  <p>So far, you already have some lines of code in your <code>index.html</code> file. You only see the content of <code>title</code> and <code>h1</code> in the browser, though. Why?</p>

  <p>Well, HTML document has 3 parts:
    <ol>
      <li><code>DOCTYPE</code>
        <p>This describes the type of HTML. For HTML5, which is the latest version of HTML, you need to write <code>&lt;!DOCTYPE html&gt;</code>.</p>
      </li>
      <li><code>&lt;head&gt;</code>
        <p>This describes the meta information about the website, like the title and links to stylesheets and scripts. You can see the list of everything that could go in the <code>&lt;head&gt;</code> at the <a href="https://github.com/joshbuchea/HEAD/blob/master/README.md">HEAD</a> repository.</p>
      </li>
      <li><code>&lt;body&gt;</code>
        <p>This describes the content that's <strong>visible</strong> to the users.</p>
      </li>
    </ol>
  </p>

<!--
  😊😊😊😊😊
-->

  <!-- <post-footer text="That's all for this first part. Next, you'll practice writing HTML." to="intro-html-css-2" link="Introduction to HTML and CSS (2/4)" /> -->
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
      title: "Introduction to HTML and CSS (1/4)",
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

<style lang="scss" scoped>
i {
  &:nth-child(1) {
    color: #f1652a;
  }

  &:nth-child(2) {
    color: #339bda;
  }
}

.logo {
  max-height: 96px;
}
</style>
