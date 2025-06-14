// services/UserService.js
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export default {
  async fetchUsers() {
    const response = await axios.get(apiUrl);
    return response.data;
  },
};
