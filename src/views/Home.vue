<template>
    <div>
      <h1>Chelita Bank</h1>
      <AccountForm @search="fetchAccountData" />
      <AccountDetails v-if="account" :account="account" />
    </div>
  </template>
  
  <script>
  import AccountForm from '@/components/AccountForm.vue';
  import AccountDetails from '@/components/AccountDetails.vue';
  
  export default {
    components: { AccountForm, AccountDetails },
    data() {
      return {
        account: null
      };
    },
    methods: {
      async fetchAccountData(accountId) {
        try {
          const response = await fetch(`http://localhost:8000/accounts/${accountId}`);
          this.account = await response.json();
        } catch (error) {
          console.error('Error al obtener la cuenta:', error);
        }
      }
    }
  };
  </script>
  