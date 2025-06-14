<!-- Define scripts -->
<script>
import { ref, onMounted } from "vue";
import UserCard from "./UserCard.vue";
import UserModal from "./UserModal.vue";
import SearchBar from "./SearchBar.vue";
import UserService from "../services/UserServices";

export default {
  components: {
    UserCard,
    UserModal,
    SearchBar,
  },
  setup() {
    const userData = ref([]);
    const filteredUsers = ref([]);
    const selectedUser = ref({});
    const isModalOpen = ref(false);
    const loading = ref(true);
    const error = ref(null);

    /**
     * Method to get users from the API using the service
     */
    const getUsers = async () => {
      try {
        const response = await UserService.fetchUsers(); // Usamos el servicio
        userData.value = response;
        filteredUsers.value = userData.value;
      } catch (err) {
        error.value = "Hubo un error al cargar los usuarios."; // Mensaje de error
      } finally {
        loading.value = false; // Termina el indicador de carga
      }
    };

    /**
     * Method to filter users
     */
    const filterUsers = (searchQuery) => {
      filteredUsers.value = userData.value.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    };


    /**
     * Method to open the modal with the user information
     */
    const openModal = (user) => {
      selectedUser.value = user;
      isModalOpen.value = true;
    };

    onMounted(() => {
      getUsers();
    });

    return {
      userData,
      filteredUsers,
      selectedUser,
      isModalOpen,
      loading,
      error,
      openModal,
      filterUsers,
    };
  },
};
</script>

<!-- Define template -->
<template>
  <div class="body d-flex flex-column min-vh-100">
    <div class="text-center">
      <h1>Gestión de usuarios</h1>
    </div>
    <!-- Search Bar -->
    <SearchBar @search="filterUsers" />

    <!-- Loading indicator -->
    <div v-if="loading" class="loading-container">
      <v-progress-circular indeterminate color="primary" size="100"></v-progress-circular> <!-- Tamaño del indicador -->
    </div>

    <!-- Error Handling -->
    <div v-if="error" class="d-flex justify-center">
      <v-alert type="error" dismissible>{{ error }}</v-alert>
    </div>

    <!-- User Cards -->
    <v-row v-if="filteredUsers.length > 0" class="d-flex justify-start">
      <UserCard v-for="(user, index) in filteredUsers" :key="user.id" :user="user" @click="openModal(user)" />
    </v-row>

    <!-- User Modal -->
    <UserModal :isOpen="isModalOpen" :user="selectedUser" @update:isOpen="isModalOpen = $event" />
  </div>
  <TheFooter />
</template>

<!-- Define styles -->
<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.v-progress-circular {
  font-size: 3rem;
}

.body {
  padding: 50px;
}
</style>
