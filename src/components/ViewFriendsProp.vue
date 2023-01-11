<script setup>
import friendList from './FriendProp.vue'
</script>

<template> 
    <friendList v-for="friend in Friends" :id="friend._id" :name="friend.name" :phone-number="friend.phone" :email-address="friend.email" :key="friend._id">
    </friendList>     
</template>
<script>

import axios from "axios";
export default {
    // components: {
    //     friendList
    // },
    data() {
        return {
            Friends: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api';
        axios.get(apiURL).then(res => {
            this.Friends = res.data;
        }).catch(error => {
            console.log(error)
        });
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
