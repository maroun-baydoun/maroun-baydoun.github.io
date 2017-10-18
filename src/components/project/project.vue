<template>
  <article>
    <section class="header">
      <h3>{{project.name}}</h3>
      <nav>
        <a v-bind:href="project.githubUrl" target="_blank" rel="noreferrer noopener external" v-bind:title="project.name+ ' on Guithub'" v-bind:aria-title="project.name+ ' on Guithub'">
          <i class="fa fa-github-alt" aria-hidden="true"></i>
        </a>
        <a v-bind:href="project.url" v-bind:title="project.name+ ' project page'" v-bind:aria-title="project.name+ ' project page'">
          <i class="fa fa-file-code-o" aria-hidden="true"></i>
        </a>
      </nav>
    </section>
    <section class="description">{{project.description}}</section>
    <stack :stack="project.stack"></stack>
  </article>
</template>

<script src="./project.js"></script>
<style lang="scss" src="./project.scss" scoped></style>
