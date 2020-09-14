/**
 * Arquivo responsável rotas da API
 */

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// => Definindo as rotas do CRUD - 'Employee'

// => Rota responsável por criar um novo colaborador : (POST): localhost://3000/api/employees
router.post('/employees', employeeController.createEmployee);

//=> Rota responsável por listar os colaboradores : (GET): localhost://3000/api/employees
router.get('/employees', employeeController.listAllEmployees);

//=> Rota responsável por listar um colaborador específico : (GET): localhost://3000/api/employees/:id
router.get('/employees/:id', employeeController.FindEmployeeById);

//=> Rota responsável por atualizar um colaborador específico : (PUT): localhost://3000/api/employees/:id
router.put('/employees/:id', employeeController.updateEmployeeById);

//=> Rota responsável por deletar/excluir um colaborador específico : (DELETE): localhost://3000/api/employees/:id
router.delete('/employees/:id', employeeController.deleteEmployeeById);

module.exports = router;