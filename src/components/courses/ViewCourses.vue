<template>
  <div class="card list" v-for="item in allData" :key="item._id">
    <h2>{{item.name}}</h2>
    <p><span class="label">Type: </span>{{item.courseType}} </p>
    <p><span class="label">Detail: </span>{{item.detail}} </p>
  </div>
</template>
<script>
// import friendList from './ViewFriendComponent.vue'
import axios from "axios";
export default {
    data() {
        return {
            allData: [],
            mName: 'Courses',
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api/view-data';
        axios.get(apiURL, { params: { mName: this.mName }}).then(res => {
            this.allData = res.data;
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
