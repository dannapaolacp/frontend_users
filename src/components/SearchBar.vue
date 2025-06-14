<!-- Define scripts -->
<script>
// Exports
export default {
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    updateSearchQuery() {
      this.$emit('search', this.searchQuery);
    },
    clearSearch() {
      this.searchQuery = "";
      this.$emit('search', this.searchQuery);
    }
  }
};
</script>

<!-- Define template -->
<template>
  <div>
    <v-text-field v-model="searchQuery" label="Buscar por nombre" clearable @input="updateSearchQuery"
      @click:clear="clearSearch" />
  </div>
</template>
