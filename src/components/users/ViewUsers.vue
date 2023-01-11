<template>
  <div class="card list" v-for="item in allData" :key="item._id">
    <h2>{{item.name}}</h2>
    <p><span class="label">Email: </span>{{item.email}} </p>
    <h3>Course Detail</h3>
    <p><span class="label">Course: </span>{{item.course}} </p>
    <p><span class="label">Course Type: </span>{{item.Courses[0].courseType}} </p>
    <p><span class="label">Course Detail: </span>{{item.Courses[0].detail}} </p>
  </div>
</template>
<script>
// import friendList from './ViewFriendComponent.vue'
import axios from "axios";
export default {
    data() {
        return {
            allData: [],
            mName: 'Users',
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api/view-users';
        axios.get(apiURL, { params: { mName: this.mName }}).then(res => {
            this.allData = res.data;
            // console.log(this.allData);
        }).catch(error => {
            console.log(error)
        });
    }
}
</script>
<style scoped>
.col-content.list-section .list {
    text-align: left;
}
.label {
    font-weight: bold;
}

</style>
