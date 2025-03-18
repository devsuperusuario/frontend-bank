<template>
  <div>
    <h1>Historial de Movimientos</h1>
    <input v-model="accountId" placeholder="Ingrese el ID de la cuenta" />
    <button @click="fetchHistorical">Buscar</button>

    <div v-if="loading">Cargando...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="history.length">
      <h2>Movimientos</h2>
      <table class="movement-history">
        <thead>
          <tr>
            <th>ID</th>
            <th>Monto</th>
            <th>Tipo de Transacción</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="movement in history" :key="movement.id">
            <td>{{ movement.id }}</td>
            <td>{{ movement.amount }}</td>
            <td>{{ movement.transaction_type }}</td>
            <td>{{ movement.performed_at }}</td>
            <td>{{ movement.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountId: "",
      history: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchHistorical() {
      if (!this.accountId) {
        this.error = "Por favor, ingrese un ID de cuenta";
        return;
      }
      this.loading = true;
      this.error = null;
      try {

        const response = await fetch(
          `${process.env.VUE_APP_API_URL}/get-historical/${this.accountId}`,
        );

        if (!response.ok) {
          throw new Error("Error al obtener el historial");
        }
        this.history = await response.json();

        this.history = this.history.historical;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
.movement-history {
  margin: 0 auto;
  width: 80%;
  border-collapse: collapse;
}

.movement-history th,
.movement-history td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.movement-history th {
  background-color: #f4f4f4;
}
</style>
