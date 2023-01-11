<template>
    <div class="card add-friend">
        <form @submit.prevent="addItem">
            <label>Item: <input type="text" name="name" v-model="item_data.stock_item" required></label>
            <label>Description: <input type="text" name="description" v-model="item_data.description" required></label>
            <label>Instock: <input type="text" name="instock" v-model="item_data.instock" required></label>
            
            <button>Submit</button>
        </form>
        <div class="response-msg"><p>{{message}}</p></div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                allData: [],
                item_data: {
                    stock_item: '',
                    description: '',
                    Instock: '',
                    mName: 'Items'
                },
                message: '',
            };
        },
        methods: {
            addItem() {
                let apiURL = 'http://localhost:4000/api/insert-data';

                axios.post(apiURL, this.item_data).then(() => {
                    this.$router.push('/view-items') // For go to page, $router is use bcz package is installed
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