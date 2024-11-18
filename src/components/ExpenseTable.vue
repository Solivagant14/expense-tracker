<template>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Purpose</th>
            <th>Tag</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items[date.props.getDate()%3]" :key="index">
            <td>{{ item.amount }}</td>
            <td>{{ item.purpose }}</td>
            <td>
              <div class="tag">{{ item.tag }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
    
  const props = defineProps({
    date: {
      type: Date,
      required: true,
    },
  });
  

  const items = reactive([
    [{ amount: 200, purpose: 'Office Supplies', tag: 'Business' },
    { amount: 4500, purpose: 'Equipment', tag: 'Business' },
    { amount: 300, purpose: 'Books', tag: 'Education' },
    { amount: 100, purpose: 'Gym', tag: 'Health' },],
    [{ amount: 300, purpose: 'Office Supplies', tag: 'Business' },
    { amount: 200, purpose: 'Lunch', tag: 'Personal' },
    { amount: 100, purpose: 'Gym', tag: 'Health' },],
    [{ amount: 400, purpose: 'Office Supplies', tag: 'Business' },
    { amount: 200, purpose: 'Lunch', tag: 'Personal' },
    { amount: 4500, purpose: 'Equipment', tag: 'Business' },
    { amount: 300, purpose: 'Books', tag: 'Education' },
    { amount: 100, purpose: 'Gym', tag: 'Health' },],
  ]);



  </script>
  
  <style>
  .table-container {
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #ddd;
    margin: 20px;
    max-width: 600px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  thead {
    background-color: #f5f5f5;
  }
  
  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    font-weight: bold;
    color: #333;
  }
  
  .tag {
    display: inline-block;
    padding: 5px 10px;
    background-color: #f0f0f0;
    border-radius: 12px;
    text-transform: capitalize;
    font-size: 14px;
  }
  </style>
  