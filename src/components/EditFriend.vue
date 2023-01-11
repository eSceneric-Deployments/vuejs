<template>
    <div class="card add-friend">
        <form @submit.prevent="updateFriend">
            <label>Name: <input type="name" name="name" v-model="friend.name" required></label>
            <label>Email: <input type="email" name="email" v-model="friend.email" required></label>
            <label>Phone: <input type="number" name="phone" v-model="friend.phone"></label>
            <button>Update</button>
        </form>
        <div class="response-msg"><p>{{message}}</p></div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            friend: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-friend/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.friend = res.data;
        })
    },
    methods: {
        updateFriend() {
            let apiURL = `http://localhost:4000/api/update-friend/${this.$route.params.id}`;

            axios.post(apiURL, this.friend).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>
<style scoped>

</style>