<template>
  <div id="app">
    <app-header></app-header>
    <section class="main">
      <section class="project-container">
        <project v-for="project in projects"
                 :key="project.name"
                 :project="project">
        </project>
      </section>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script src="./app.js"></script>
<style lang="scss" src="./app.scss"></style>
