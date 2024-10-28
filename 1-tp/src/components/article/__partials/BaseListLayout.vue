<template>
  <div>
    <slot name="title"></slot>
    <slot></slot>
  </div>
</template>
<style scoped>
.red {
  text-decoration: line-through;
  color: red;
}

li {
  cursor: pointer;
}

img {
  width: 3rem;
}
</style>
