<template>
  <div>
    <Card :props="date" />
  </div>
  <div class="calendar-container">
    <VDatePicker v-model="date" @click="printDate"  mode="date" />
  </div>
</template>

<script setup>
import Card from './components/Card.vue'

import { ref } from 'vue';
const date = ref(new Date());

function printDate() {
  console.log(date.value);
  // console.log(typeof );
  const month = date.value.getMonth() + 1; // getMonth() returns a zero-based month
  const day = date.value.getDay(); // getDay() returns the day of the week (0-6, Sunday-Saturday)
  const dateNum = date.value.getDate(); // getDate() returns the day of the month
  const year = date.value.getFullYear(); // getFullYear() returns the full year (e.g., 2024)

  // // Log the extracted values
  // console.log(`Month: ${month}`);
  // console.log(`Day: ${day}`);
  // console.log(`Date: ${dateNum}`);
  // console.log(`Year: ${year}`);

}


</script>

<style scoped>
  .calendar-container {
    margin: 20px;
  }
</style>
