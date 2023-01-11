<script setup>
import Component1 from './form_components/FormComponent1'
import Component2 from './form_components/FormComponent2'
import Component3 from './form_components/FormComponent3'

</script>

<template>
   <form class="multi-step" @submit.prevent="submitMultistepForm">
      <component-1 v-if="activeStep==1" @next-step="nextStep">
         <template v-slot:step1>
         </template>
      </component-1>
      <component-2 v-if="activeStep==2" @next-step="nextStep">
         <template v-slot:step2>
         </template>
      </component-2>
      <component-3 v-if="activeStep==3" @next-step="nextStep">
         <template v-slot:step1>
         </template>
      </component-3>
   </form>
</template>
<script>
export default {
   components: {
      Component1,
      Component2,
      Component3
   },
   data(){
      return {
         activeStep:1,
      }
   },
   methods: {
      nextStep(step){
         this.activeStep=step
      }
   }
}
</script>
<style scoped>
label {
   display: block;
}
</style>