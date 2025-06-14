<!-- Define scripts -->
<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    /**
     * Method to close the modal
     */
    closeModal() {
      this.$emit('update:isOpen', false);
    }
  }
};
</script>

<!-- Define template -->
<template>
  <v-dialog v-bind="{ 'modelValue': isOpen }" persistent max-width="600px" @update:modelValue="closeModal">
    <v-card>
      <v-card-title class="headline text-blue">Información del Usuario</v-card-title>
      <v-card-text>
        <p><strong class="text-blue">Dirección:</strong> {{ user.address.street }}, {{ user.address.suite }}, {{
          user.address.city }} - {{
            user.address.zipcode }}</p>
        <p><strong class="text-blue">Teléfono:</strong> {{ user.phone }}</p>
        <p><strong class="text-blue">Sitio Web:</strong> <a :href="'http://' + user.website" target="_blank">{{
          user.website }}</a></p>
        <p><strong class="text-blue">Compañía:</strong> {{ user.company.name }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="closeModal">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<!-- Define styles -->
<style scoped>
.v-dialog {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.headline {
  padding: 20px;
}
</style>
