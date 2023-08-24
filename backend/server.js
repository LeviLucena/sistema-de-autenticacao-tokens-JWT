const express = require("express");
const cors = require("cors"); // Importe o módulo cors
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Use o middleware cors

const secretKey = "chave_secreta_super_secreta";

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Aqui você deve verificar as credenciais no seu sistema de autenticação
  if (username === "admin" && password === "Prodesp01") {
    const payload = { username };
    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
    res.json({ message: "Autenticado com sucesso!", token });
  } else {
    res.status(401).json({ message: "Credenciais inválidas." });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
