import { Router } from 'express';
import AutheticationCompanyService from '../services/AutheticationCompanyService';

const seesionRouter = Router();

seesionRouter.post('/', async (request, response) => {
  const { name, password } = request.body;
  const autheticationCompany = new AutheticationCompanyService();

  const { company, token } = await autheticationCompany.run({ name, password });

  delete company.password;

  return response.json({ company, token });
});

export default seesionRouter;
