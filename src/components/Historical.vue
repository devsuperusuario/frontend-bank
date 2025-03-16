<template>
    <div>
      <h1>Historial de Movimientos</h1>
      <input v-model="accountId" placeholder="Ingrese el ID de la cuenta" />
      <button @click="fetchHistorical">Buscar</button>
      
      <div v-if="loading">Cargando...</div>
      <div v-if="error" class="error">{{ error }}</div>
      
      <div v-if="history.length">
        <h2>Movimientos</h2>
        <ul>
          <li v-for="movement in history" :key="movement.id">
            {{ movement.date }} - {{ movement.amount }} - {{ movement.type }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        accountId: '',
        history: [],
        loading: false,
        error: null,
      };
    },
    methods: {
      async fetchHistorical() {
        if (!this.accountId) {
          this.error = 'Por favor, ingrese un ID de cuenta';
          return;
        }
        this.loading = true;
        this.error = null;
        try {
          const response = await fetch(`/api/get-historical?id=${this.accountId}`);
          if (!response.ok) {
            throw new Error('Error al obtener el historial');
          }
          this.history = await response.json();
        } catch (err) {
          this.error = err.message;
        } finally {
          this.loading = false;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>
  