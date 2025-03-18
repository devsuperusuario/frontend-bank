<template>
  <div class="app-container">
    <div class="logo-container">
      <img src="./assets/chelita-bank.png" alt="chelita-bank" />
    </div>

    <nav class="nav-container">
      <router-link class="nav-item" to="/CreateAccount"
        >Crea una cuenta</router-link
      >
      <router-link class="nav-item" to="/">Balance</router-link>
      <router-link class="nav-item" to="/deposit">Depósito</router-link>
      <router-link class="nav-item" to="/historical"
        >Historial de movimientos
      </router-link>
    </nav>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Poppins", Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-top: 20px;
}

.logo-container img {
  transform: translateY(-20px);
}

.nav-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  background-color: rgba(38, 117, 236, 0);
  padding: 12px 20px;
  border-radius: 8px;
  transform: translateY(-130px);
  font-size: 15px;
}

.nav-item {
  text-decoration: none;
  color: black;
  font-family: sans-serif;
  font-weight: 300;
  font-size: 1.3em;
  padding: 10px 15px;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

.nav-item:hover {
  background-color: #4e554f69;
  border: 2px solid #fff;
  transform: scale(0.9);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
}
</style>
