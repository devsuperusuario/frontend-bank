<template>
  <div class="deposit-container">
    <h2>Realizar Depósito</h2>
    <form @submit.prevent="makeDeposit">
      <label for="account">Número de Cuenta:</label>
      <input type="number" v-model="depositData.account_id" required />

      <label for="amount">Monto:</label>
      <input type="number" v-model="depositData.amount" required />

      <label for="currency">Moneda:</label>
      <select v-model="depositData.currency" required>
        <option value="MXN">MXN</option>
        <option value="USD">USD</option>
      </select>

      <button type="submit">Depositar</button>
    </form>

    <div v-if="message" class="notification">
      {{ message }}
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useToast } from "vue-toast-notification";

export default {
  setup() {
    const depositData = ref({
      account_id: "",
      amount: "",
      currency: "MXN",
      transaction_type: "deposito",
    });

    const message = ref(null);
    let socket = null;

    const toast = useToast();

    const makeDeposit = async () => {
      try {
        const response = await fetch(
          `${process.env.VUE_APP_API_URL}/deposit/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(depositData.value),
          },
        );

        const result = await response.json();
        if (response.ok) {
          message.value = "Depósito exitoso";
          toast.success("Depósito exitoso", { duration: 5000 });
        } else {
          message.value = `Error: ${result.detail}`;
          toast.error(`Error: ${result.detail}`, { duration: 5000 });
        }
      } catch (error) {
        message.value = "Error al conectar con el servidor";
        toast.error("Error al conectar con el servidor", { duration: 5000 });
      }
    };

    const connectWebSocket = () => {
      socket = new WebSocket(`${process.env.VUE_APP_API_URL}/ws/notifications`);

      socket.onmessage = (event) => {

        console.log("evento recibido en los sockets", event);
        
        const depositNotification = JSON.parse(event.data);
        if (depositNotification.account_id === depositData.value.account_id) {
          message.value = `Has recibido un nuevo depósito de ${depositNotification.amount} ${depositNotification.currency}`;
          toast.info(
            `Has recibido un nuevo depósito de ${depositNotification.amount} ${depositNotification.currency}`,
            { duration: 10000 },
          );
          toast.info(
            `Tipo de transacción: ${depositNotification.transaction_type} --> ID: ${depositNotification.transaction_id}`,
            { duration: 10000 },
          );
        }
      };
    };

    onMounted(connectWebSocket);

    onUnmounted(() => {
      if (socket) {
        socket.close();
      }
    });

    return { depositData, makeDeposit, message };
  },
};
</script>

<style>
.deposit-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f9f9f9;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
  font-weight: bold;
}

input,
select,
button {
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
}

button {
  margin-top: 15px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

.notification {
  margin-top: 20px;
  padding: 10px;
  background-color: #dff0d8;
  color: #3c763d;
  border-radius: 5px;
  text-align: center;
}
</style>
