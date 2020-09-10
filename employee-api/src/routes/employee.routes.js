/**
 * Arquivo responsável rotas da API
 */

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

 // => Definindo as rotas do CRUD - 'Employee'

 // => Rota responsável por criar um novo colaborador : (POST): localhost://3000/api/employees
 router.post('/employees', employeeController.createEmployee);

 // => Rota responsável por listar os colaboradores : (GET): localhost://3000/api/employees
//  router.get('/employees', employeeController.listAllEmployees);

 module.exports = router;