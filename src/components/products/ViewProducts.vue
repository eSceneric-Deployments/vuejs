<template>
  <div class="card list" v-for="item in allData" :key="item._id">
    <h2>{{item.item}}</h2>
    <p><span class="label">Price: </span>{{item.price}} </p>
    <p><span class="label">Quantity: </span>{{item.quantity}} </p>
  </div>
</template>
<script>
// import friendList from './ViewFriendComponent.vue'
import axios from "axios";
export default {
    data() {
        return {
            allData: [],
            mName: 'Orders',
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
