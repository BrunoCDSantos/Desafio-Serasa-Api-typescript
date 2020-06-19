import { Router } from 'express';
import CreateCompany from '../services/CreateCompany';

const comapanyRoute = Router();

comapanyRoute.post('/', async (request, response) => {
  const { name, password } = request.body;
  const createCompany = new CreateCompany();

  const company = await createCompany.run({
    name,
    password,
  });

  delete company.password;

  return response.json(company);
});

export default comapanyRoute;
