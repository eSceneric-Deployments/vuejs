<template>

  <div class="card list">
    <h2>{{friend.name}}</h2>
    <div>
        <div class="card"><b>Phone:</b> {{friend.phone}}</div>
        <div class="card"><b>Email:</b> {{friend.email}}</div>
    </div>
    <router-link :to="{name: 'edit', params: { id: friend._id }}" class="btn btn-success">Edit</router-link>

    <button @click="deleteFriend(friend._id)">Delete Friend</button>
  </div>
</template>
<script>
// import friendList from './ViewFriendComponent.vue'
import axios from "axios";
export default {
    data() {
        return {
            friend: [],
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-friend/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.friend = res.data;
        })
    },
    methods: {
        deleteFriend(id){
            let apiURL = `http://localhost:4000/api/delete-friend/${id}`;
            let indexOfArrayItem = this.Friends.findIndex(i => i._id === id);

            if (window.confirm("Do you really want to delete?")) {
                axios.delete(apiURL).then(() => {
                    this.Friends.splice(indexOfArrayItem, 1);
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    },
    // components: {
    //     friendList
    // }
}
</script>
<style scoped>

</style>
