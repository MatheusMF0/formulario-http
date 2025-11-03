import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const server = express();
const host = "0.0.0.0";
const port = 3000;

// Necessário para resolver o caminho do HTML
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.use(express.urlencoded({ extended: true }));

// envia o formulário HTML
server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Rota que recebe os dados enviados pelo formulário
server.post("/cadastrar", (req, res) => {
  const { nome, idade, cpf, cidade, telefone, email, profissao, descricao } = req.body;

  res.send(`
    <h2>Cadastro Realizado com Sucesso!</h2>
    <p><b>Nome:</b> ${nome}</p>
    <p><b>Idade:</b> ${idade}</p>
    <p><b>CPF:</b> ${cpf}</p>
    <p><b>Cidade:</b> ${cidade}</p>
    <p><b>Telefone:</b> ${telefone}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Profissão:</b> ${profissao}</p>
    <p><b>Descrição:</b> ${descricao || "Não informada"}</p>
    <br>
    <a href="/">Voltar ao formulário</a>
  `);
});

server.listen(port, host, () => {
  console.log(`Servidor rodando em http://${host}:${port}`);
});
