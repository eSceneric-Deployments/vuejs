<script setup>
import axios from 'axios'
</script>
<template>
    <div class="card add-friend">
        <form @submit.prevent="addFriends">
            <label>Name: <input type="text" name="name" v-model="friend.name" required></label>
            <label>Email: <input type="email" name="email" v-model="friend.email" required></label>
            <label>Phone: <input type="number" name="phone" v-model="friend.phone"></label>
            <button>Submit</button>
        </form>
        <div class="response-msg"><p>{{message}}</p></div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      friend: {
          name: '',
          email: '',
          phone: ''
      },
      message: '',
    };
  },
  methods: {
    addFriends() {
          let apiURL = 'http://localhost:4000/api/create-friend';
          
          axios.post(apiURL, this.friend).then(() => {
            this.$router.push('/view') // For go to page, $router is use bcz package is installed
            this.friend = {
              name: '',
              email: '',
              phone: ''
            }
          }).catch(error => {
              console.log(error)
          });
      }
  },
};
</script>
<style scoped>

</style>
