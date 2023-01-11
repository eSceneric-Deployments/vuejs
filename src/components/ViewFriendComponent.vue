<template>
  <div>
    <div class="card list">
      <h2>{{name}}</h2>
      <button @click="toggleDetails()">{{detailsAreVisible? 'Hide' : 'Show Detail'}}</button>
      <div v-if="detailsAreVisible">
          <div class="card"><b>Phone:</b> {{phone}}</div>
          <div class="card"><b>Email:</b> {{email}}</div>
      </div>
      
    </div>
  </div>
</template>
<script>
  export default {
    // name: 'friendList',
    // inheritAttrs:false,
    props: ['id', 'name', 'phone', 'email'],
    // props: {
    //   id: {
    //     type: String,
    //     required: true,
    //   },
    //   name: {
    //     type: String,
    //     required: true,
    //   },
    //   phone: {
    //     type: Number,
    //     required: true,
    //   },
    //   email: {
    //     type: String,
    //     required: true,
    //   }
    // },
    data(){
      return {
        detailsAreVisible: false,
      }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    }
  }
</script>
<style scoped>
</style>
