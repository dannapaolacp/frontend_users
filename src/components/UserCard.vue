<!-- Define scripts -->
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    viewMore() {
      this.$emit('click');
    }
  }
};
</script>

<!-- Define template -->
<template>
  <v-col cols="12" md="4" lg="3">
    <v-card>
      <v-img :src="'https://i.pravatar.cc/150?img=' + user.id" class="white--text align-end" height="200px">
      </v-img>
      <v-card-title>{{ user.name }}</v-card-title>
      <v-card-subtitle>{{ user.email }}</v-card-subtitle>
      <v-card-actions>
        <v-btn class="ma-2" color="primary" @click="viewMore">
          Ver más
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
