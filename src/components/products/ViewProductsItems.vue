<template>
  <div class="card list" v-for="item in allData" :key="item._id">
    <h2>{{item.item}}</h2>
    <p><span class="label">Price: </span>{{item.price}} </p>
    <p><span class="label">Quantity: </span>{{item.quantity}} </p>
    <p v-if="item.stockdata!=''"><span class="label">Description: </span>{{item.stockdata
[0].description}} </p>
    <p v-if="item.stockdata!=''"><span class="label">Instock: </span>{{item.stockdata
[0].instock}} </p>
  </div>
</template>
<script>
// import friendList from './ViewFriendComponent.vue'
import axios from "axios";
export default {
    data() {
        return {
            allData: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api/view-ptoduct-items';
        axios.get(apiURL).then(res => {
            this.allData = res.data;
            console.log(this.allData);
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
