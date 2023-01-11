<template>

  <div class="card list">
    <h2>{{name}} </h2>
    <button @click="showFriendDetail">{{showDetail? 'Hide' : 'Show Detail'}}</button>
    <div v-if="showDetail">
        <div class="card"><b>Phone:</b> {{phoneNumber}}</div>
        <div class="card"><b>Email:</b> {{emailAddress}}</div>
    </div>
    <router-link :to="{name: 'edit', params: { id: id }}" class="btn btn-success">Edit</router-link>
    <router-link :to="{name: 'viewFriend', params: { id: id }}" class="btn btn-success">View</router-link>
    <button @click="deleteFriend(id)">Delete Friend</button>
  </div>
</template>
<script>

  export default {
    props: ['id','name', 'phoneNumber', 'emailAddress'],
    data(){
      return {
        showDetail: false,
      }
    },

    methods: {
        showFriendDetail() {
            this.showDetail = !this.showDetail;
        }
    }
  }
</script>
<style scoped>
</style>
