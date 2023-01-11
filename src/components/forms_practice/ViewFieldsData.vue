<template>
  <div class="card list" v-for="item in allFieldsData" :key="item._id">
    <h2>{{item.name}}</h2>
    <p><span class="label">Email: </span>{{item.email}}  <span class="label">Radio: </span>{{item.radio}}</p>
    <p><span class="label">Phone: </span>{{item.phone}}  <span class="label">Select: </span>{{item.selectedValue}}</p>
    <p><span class="label">State: </span>{{item.states}}  <span class="label">City: </span>{{item.city}}</p>
    <p><span class="label">Conditional Field: </span>{{item.conditionalValue}} </p>
    <p><span class="label">Multi Select: </span> <span v-for="mvals in item.selectedMultiValue" :key="mvals">{{mvals}}</span></p>
    <p><span class="label">Check Value: </span><span v-for="cvals in item.checkValues" :key="cvals.id"><span v-if="cvals.checked==true">{{cvals.vals}}</span></span></p>
    <p>{{item.message}}</p>
  </div>
</template>
<script>
// import friendList from './ViewFriendComponent.vue'
import axios from "axios";
export default {
    data() {
        return {
            allFieldsData: [],
            showDetail: false,
            mName: 'AllFields',
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api/view-data';
        axios.get(apiURL, { params: { mName: this.mName }}).then(res => {
            this.allFieldsData = res.data;
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
