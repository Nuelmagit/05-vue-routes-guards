<template>
  <a
    class="normal-link"
    v-if="isExternalLink"
    target="_blank"
    :href="link.to"
    >{{ link.name }}</a
  >
  <!-- v-slot -> href, isActive -->
  <router-link
    v-else
    :to="route"
    v-slot="{ isActive }"
  >
    <a :class="isActive ? 'is-active' : 'normal-link'"> {{ link.name }}</a>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith("http");
    },
    route() {
      return this.link.id === undefined
        ? { name: this.link.to }
        : { name: this.link.to, params: { id: this.link.id } };
    },
  },
};
</script>

<style scoped>
a {
  font-weight: bold;
  margin: 0 10px;
}
.is-active {
  color: #42b983;
}
.normal-link {
  color: #2c3e50;
}
</style>