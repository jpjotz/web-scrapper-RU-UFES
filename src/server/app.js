process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const cardapioRoutes = require('../routes/cardapioRoutes');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api", cardapioRoutes);

app.listen(PORT, () => {
    console.log("Servidor rodando na porta 3000");
});