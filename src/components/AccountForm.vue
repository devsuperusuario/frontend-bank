

   <template>
    <div>
      <h2>Consulta de Saldo</h2>
      <input v-model="accountId" type="number" placeholder="Ingrese ID de cuenta" />
      <button @click="getBalance">Buscar</button>
  
      <div v-if="account">
        <h3>Detalles de la Cuenta</h3>
        <p><strong>ID:</strong> {{ account.id }}</p>
        <p><strong>Propietario:</strong> {{ account.name }}</p>
        <p><strong>Saldo:</strong> ${{ account.balance }}</p>
        <p><strong>Email:</strong> {{ account.email }}</p>
        <p><strong>Moneda:</strong> {{ account.currency }}</p>
      </div>
  
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        accountId: "",
        account: null,
        errorMessage: "",
      };
    },
    methods: {
      async getBalance() {
        this.errorMessage = "";
        this.account = null;
  
        try {
          // Formamos la URL con el parámetro `account_id`
          const response = await fetch(`${process.env.VUE_APP_API_URL}/get-balance/${this.accountId}`);
  
          if (!response.ok) {
            throw new Error("Cuenta no encontrada o error en el servidor");
          }
  
          const data = await response.json();
          this.account = data.balance;
        } catch (error) {
          this.errorMessage = error.message;
        }
      },
    },
  };
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>
  