import { Router } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';
import ensureAuthentication from '../middlewares/ensureAuthentication';
import CreateAccounts from '../services/CreateAccount';
import UpdateFile from '../services/UpdateFile';
import AccountRepository from '../models/accounts';
import configUpload from '../config/upload';

const account = Router();
const upload = multer(configUpload);

account.use(ensureAuthentication);

account.get('/', async (request, response) => {
  const accountRepository = getRepository(AccountRepository);
  const accounts = await accountRepository.find();
  return response.json(accounts);
});

account.post('/', async (request, response) => {
  const { value, description, id, pay } = request.body;
  const createAccount = new CreateAccounts();

  const accountCreate = await createAccount.run({
    description,
    value,
    id_company: id,
    pay,
  });

  return response.json(accountCreate);
});

account.patch('/file/:id', upload.single('file'), async (request, response) => {
  const { id } = request.params;
  const updateFile = new UpdateFile();
  const FileAccount = await updateFile.run({
    id_company: id,
    FileName: request.file.filename,
  });

  return response.json(FileAccount);
});

export default account;
