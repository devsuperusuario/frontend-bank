<template>
  <div class="account-container">
    <h2>Crear Cuenta</h2>
    <form @submit.prevent="createAccount">
      <label for="name">Nombre:</label>
      <input type="text" v-model="accountData.name" required />

      <label for="email">Correo Electrónico:</label>
      <input type="email" v-model="accountData.email" required />

      <label for="password">Contraseña:</label>
      <input type="password" v-model="accountData.password" required />

      <label for="confirmPassword">Confirmar Contraseña:</label>
      <input type="password" v-model="accountData.confirmPassword" required />

      <button type="submit">Crear Cuenta</button>
    </form>

    <div v-if="message" class="notification">
      {{ message }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useToast } from "vue-toast-notification";

export default {
  setup() {
    const accountData = ref({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      account_type: "debito",
      initial_balance: 0,
      currency: "MXN",
    });

    const message = ref(null);
    const toast = useToast();

    const createAccount = async () => {
      if (accountData.value.password !== accountData.value.confirmPassword) {
        message.value = "Las contraseñas no coinciden";
        toast.error("Las contraseñas no coinciden", { duration: 5000 });
        return;
      }

      try {
        const response = await fetch(
          `${process.env.VUE_APP_API_URL}/create-account/`,

          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(accountData.value),
          },
        );

        const result = await response.json();
        if (response.ok) {
          message.value = "Cuenta creada exitosamente";
          toast.success("Cuenta creada exitosamente", { duration: 5000 });
        } else {
          message.value = `Error: ${result.detail}`;
          toast.error(`Error: ${result.detail}`, { duration: 5000 });
          console.log("error", result.detail);
        }
      } catch (error) {
        message.value = "Error al conectar con el servidor";
        toast.error("Error al conectar con el servidor", { duration: 5000 });
      }
    };

    return { accountData, createAccount, message };
  },
};
</script>

<style>
.account-container {
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
