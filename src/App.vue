<template>
  <div id="app">
     <Home />
     <GithubCorner />
  </div>
</template>

<script>
/* eslint-disable */
import Home from "./components/Home.vue";
import GithubCorner from "./components/GithubCorner.vue";

export default {
  name: "app",
  components: {
    Home,
    GithubCorner
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Varela+Round");

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
  letter-spacing: 1.05px;
}
body {
  color: #7c0e3e;
  background: rgba(247, 99, 12, 0.01);
  font-family: "Varela Round", sans-serif;
  padding: 10px;
}
a {
  color: rgb(124, 14, 62);
}
#app {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
</style>
