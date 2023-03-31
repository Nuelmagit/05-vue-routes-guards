<template>
  <h1>About</h1>
</template>

<script>
export default {
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    // HTTP REQUESTS
    // get url params
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    // get url params
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    // lipiar algo como observables.
    console.log("unmounted");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
};
</script>
