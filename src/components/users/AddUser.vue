<script setup>
import axios from 'axios'
</script>
<template>
    <div class="card add-friend">
        <form @submit.prevent="addUser">
            <label>Name: <input type="text" name="name" v-model="user.name" required></label>
            <label>Email: <input type="email" name="email" v-model="user.email" required></label>
            
            <label>Course:
                <select v-model="user.course" required>
                    <option disabled value="">Please Select Course</option>
                    <option v-for="item in allData" :key="item._id">{{item.name}}</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
        <div class="response-msg"><p>{{message}}</p></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            allData:[],
            user: {
                name: '',
                email: '',
                course: '',
                mName: 'Users'
            },
            message: '',
            cName: 'Courses',
        };
    },
    created() {
        let apiURL = 'http://localhost:4000/api/view-data';
        axios.get(apiURL, { params: { mName: this.cName }}).then(res => {
            this.allData = res.data;
        }).catch(error => {
            console.log(error)
        });
    },
    methods: {
        addUser() {
            let apiURL = 'http://localhost:4000/api/insert-data';
            
            axios.post(apiURL, this.user).then(() => {
                this.$router.push('/view-users') // For go to page, $router is use bcz package is installed
            }).catch(error => {
                console.log(error)
            });
        }
    },
};
</script>
<style scoped>
form {
    text-align: left;
}
textarea {
    height: 200px;
    width: 400px;
}
select {
    margin-bottom: 10px;
}
label {
    align-items: center;
    display: flex;
}
</style>
