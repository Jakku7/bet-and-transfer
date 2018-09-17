<template>
  <div id="app">
    <div class="myContainer">
      <router-view/>
    </div>
  </div>
</template>
<style>
* {
  font-family: 'Lato', sans-serif;
}
.myContainer {
  width: 100%;
}
</style>
<script>
  export default {
    name: 'app'
  }
</script>