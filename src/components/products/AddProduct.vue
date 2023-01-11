<script setup>
import axios from 'axios'
</script>
<template>
    <div class="card add-friend">
        <form @submit.prevent="addProduct">
            <label>Item: <input type="text" name="name" v-model="product.item" required></label>
            <label>Price: <input type="text" name="price" v-model="product.price" required></label>
            <label>Quantity: <input type="text" name="quantity" v-model="product.quantity" required></label>
            
            <button>Submit</button>
        </form>
        <div class="response-msg"><p>{{message}}</p></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            allData:[],
            product: {
                item: '',
                price: '',
                quantity: '',
                mName: 'Orders'
            },
            message: '',
        };
    },
    methods: {
        addProduct() {
            let apiURL = 'http://localhost:4000/api/insert-data';
            
            axios.post(apiURL, this.product).then(() => {
                this.$router.push('/view-products') // For go to page, $router is use bcz package is installed
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
