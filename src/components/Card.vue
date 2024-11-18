<template>
  <div class="card">
    <ExpenseTable class="expense-table" :date="props" />
    <button> Add </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import ExpenseTable from './ExpenseTable.vue';

const props = defineProps({
  props: {
    type: Date,
    required: true,
  },  
});
</script>

<style scoped>
.card {
  width: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.expense-table {
  margin-top: 10px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
