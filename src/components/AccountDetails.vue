<template>
    <div>
      <h2>Datos de la Cuenta</h2>
      <p><strong>ID:</strong> {{ account.id }}</p>
      <p><strong>Titular:</strong> {{ account.owner }}</p>
      <p><strong>Balance:</strong> {{ account.balance }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['account']
  };
  </script>
  