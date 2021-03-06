/**
 * Arquivo responsável por toda configuração e execução do back-end
 */

const app = require('./src/app');

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log('Aplicação sendo executada na porta:', port);
});