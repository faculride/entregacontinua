const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// Rotas principais
app.get('/api', (req, res) => {
  res.send('Hello world!');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Endpoint de teste (branch master com merge)' });
});

app.get('/api/test-2', (req, res) => {
  res.json({ message: 'Endpoint de teste 2 (branch master)' });
});

// Tratamento para rotas inexistentes
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint não encontrado' });
});

// Só inicia servidor se rodar diretamente (não em testes)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  });
}

module.exports = app;
