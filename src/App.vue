<script setup>
import './assets/main.css'
</script>

<template>
  <header>
    

  </header>

  <main>
  <section class="heading-section card">
    <h1>Friend List</h1>
  </section>
  <section class="main-inner">
    <div class="row">
      <div class="col-lg-4 col-menu">
        <ul class="nav">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Add Freind</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">View Freinds</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view-with-prop">View Freinds(props)</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/all-fields">Form All Fields</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view-fields-data">View All Fields</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/multi-step">Multi Step Form</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view-multi-step">View Multi Step Form</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add-course">Add Course</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view-courses">View Courses</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add-user">Add User</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view-users">View Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add-product">Add Product</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view-products">View Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add-item">Add Item</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view-items">View Items</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view-products-items">View Products Items (Lookup)</router-link>
          </li>
        </ul>
      </div>
      <div class="col-lg-8 col-content list-section">
        <router-view></router-view>
      </div>
    </div>
  </section>
  </main>
</template>
<script>
</script>
<style scoped>
</style>
