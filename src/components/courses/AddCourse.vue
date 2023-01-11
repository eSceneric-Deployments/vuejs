<script setup>
import axios from 'axios'
</script>
<template>
    <div class="card add-friend">
        <form @submit.prevent="addCourse">
            <label>Name: <input type="text" name="name" v-model="course.name" required></label>
            <label>Field TextArea: <textarea v-model="course.detail" placeholder="Detail" required></textarea></label>
            <label>Course Type:
                <select v-model="course.courseType" required>
                    <option disabled value="">Please Select Course Type</option>
                    <option>Essentials</option>
                    <option>Components In-Depth</option>
                    <option>Reusability</option>
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
      course: {
          name: '',
          courseType: '',
          detail: '',
          mName: 'Courses',
      },
      message: '',
    };
  },
  methods: {
    addCourse() {
          let apiURL = 'http://localhost:4000/api/insert-data';
          
          axios.post(apiURL, this.course).then(() => {
            this.$router.push('/view-courses') // For go to page, $router is use bcz package is installed
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
