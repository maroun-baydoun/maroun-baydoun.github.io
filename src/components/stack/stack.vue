<template>
  <ul>
    <li v-for="item in stack"
        :key="item.name">
        {{item}}
    </li>
  </ul>
</template>

<script src="./stack.js"></script>
<style lang="scss" src="./stack.scss" scoped></style>
