<template>
    <div class="card add-friend">
        <form @submit.prevent="addData">
            <label>Field Text: <input type="text"  v-model="friend.name"></label>
            <label>Field Email: <input type="email"  v-model="friend.email"></label>
            <label>Field Number: <input type="number" v-model="friend.phone"></label>
            <label>Field TextArea: <textarea v-model="friend.message" placeholder="add multiple lines"></textarea></label>
            <label>Field Radio: 
                <input type="radio" v-model="friend.radio" :value="1">Type 1  
                <input type="radio" v-model="friend.radio" :value="2">Type 2  
                <input type="radio" v-model="friend.radio" :value="3">Type 3
            </label>
            <label class="check">Field Checkbox: 
                <li v-for="value in friend.checkValues" :key="value.id">
                    <input type="checkbox" v-model="value.checked" :value="value.vals">Type {{value.id}} 
                </li>
            </label>
            <label>Field Select:
                <select v-model="friend.selectedValue">
                    <option disabled value="">Please select one</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                </select>
            </label>
            <label>Field Multi Select:
                <select v-model="friend.selectedMultiValue" multiple="true">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                </select>
            </label>
            <h3>Conditional Fields</h3>
            <label>Field State:
                <select v-model="friend.states" @change="selectCity($event)">
                    <option disabled value="">Please select State</option>
                    <option>State 1</option>
                    <option>State 2</option>
                    <option>State 3</option>
                    <option>State 4</option>
                    <option>State 5</option>
                </select>
            </label>
            <label>Field City:
                <select v-model="friend.city" v-if="friend.cities!=''">
                    <option v-for="city in friend.cities" :key="city">{{city}}</option>
                </select>
            </label>
            <label>Field State:
                <select v-model="conditions" @change="setCondition($event)">
                    <option disabled value="">Please select State</option>
                    <option>Condition 1</option>
                    <option>Condition 2</option>
                </select>
            </label>
            <div v-if="conditionsVals==='Condition 1'"><label>Condition 1 Text: <input type="text"  v-model="friend.conditionalValue"></label></div>
            <div v-if="conditionsVals==='Condition 2'">
                <label>Field State:
                    <select v-model="friend.conditionalValue">
                        <option disabled value="">Please select Condition Value</option>
                        <option>Condition Vals 1</option>
                        <option>Condition Vals 2</option>
                        <option>Condition Vals 3</option>
                        <option>Condition Vals 4</option>
                        <option>Condition Vals 5</option>
                    </select>
                </label>
            </div>
            <button>Submit</button>
        </form>
        <div class="response-msg"><p></p></div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            friend: {
                name: '',
                email: '',
                phone: '',
                radio: '',
                message: '',
                selectedValue: '',
                selectedMultiValue: [],
                checkValues: [
                    {
                        id:1,
                        vals: 'Type 1',
                        checked: false
                    },
                    {
                        id:2,
                        vals: 'Type 2',
                        checked: false
                    },
                    {
                        id:3,
                        vals: 'Type 3',
                        checked: false
                    }
                ],
                states: '',
                cities: [],
                city: '',
                cities_all: [
                    {
                        state: 'State 1',
                        city: [
                            'City 1 1',
                            'City 1 2',
                            'City 1 3',
                        ]
                    },
                    {
                        state: 'State 2',
                        city: [
                            'City 2 1',
                            'City 2 2',
                            'City 2 3',
                        ]
                    },
                    {
                        state: 'State 3',
                        city: [
                            'City 3 1',
                            'City 3 2',
                            'City 3 3',
                        ]
                    },
                    {
                        state: 'State 4',
                        city: [
                            'City 4 1',
                            'City 4 2',
                            'City 4 3',
                        ]
                    },
                    {
                        state: 'State 5',
                        city: [
                            'City 5 1',
                            'City 5 2',
                            'City 5 3',
                        ]
                    }
                ],
                conditionalValue: '',
                mName: 'AllFields',
            },
            conditions: '',
            conditionsVals: '',
        }
    },
    methods: {
        selectCity(event){
            this.friend.cities=this.friend.cities_all.find((state) => state.state === event.target.value);
            this.friend.cities=this.friend.cities['city'];
            // console.log(this.friend.cities);
        },
        setCondition(event) {
            this.conditionsVals=event.target.value;
        },
        addData(){
            // console.log(this.friend.checkValues);
            let apiURL = 'http://localhost:4000/api/insert-data';
          
            axios.post(apiURL, this.friend).then(() => {
                this.$router.push('/view-fields-data') // For go to page, $router is use bcz package is installed
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>
<style scoped>
label {
    font-weight: bold;
    margin-bottom: 30px;
    text-align: left;
}
label.check {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
}

textarea {
    width: 400px;
    height: 100px;
}

input[type="checkbox"], input[type="radio"] {
    margin: 0;
    width: 50px;
}
select {
    width: 250px;
}
</style>