<template>
  <div class="card list" v-for="item in allData" :key="item._id">
    <h2>{{item.firstName}} {{item.lastName}}</h2>
    <p><span class="label">Email: </span>{{item.eMail}}  <span class="label">Gender: </span>{{item.gender}}</p>
    <p><span class="label">Phone: </span>{{item.phoneNumber}}  <span class="label">City: </span>{{item.city}}</p>
    <p><span class="label">Zip Code: </span>{{item.zipCode}}  <span class="label">Pin Code: </span>{{item.pinCode}}</p>
    <p><span class="label">Address: </span>{{item.address}}  <span class="label">DOB: </span>{{item.birthDay}}</p>
  </div>
</template>
<script>
// import friendList from './ViewFriendComponent.vue'
import axios from "axios";
export default {
    data() {
        return {
            allData: [],
            showDetail: false,
            mName: 'MultiStep',
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
p {
    display: flex;
    justify-content: space-between;
}
</style>
