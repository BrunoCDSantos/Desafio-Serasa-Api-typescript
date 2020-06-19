/* eslint-disable camelcase */
import { getRepository } from 'typeorm';
import Account from '../models/accounts';
import AppError from '../errors/AppErrors';

interface Request {
  id_company: string;
  description: string;
  value: string;
  pay: boolean;
}

class CreateAccount {
  public async run({
    id_company,
    description,
    value,
    pay = false,
  }: Request): Promise<Account> {
    const accountsRepository = getRepository(Account);

    if (value == null) {
      throw new AppError('Not informed value');
    }

    const account = accountsRepository.create({
      value,
      description,
      id_company,
      file: ' ',
      pay,
    });

    await accountsRepository.save(account);

    return account;
  }
}

export default CreateAccount;
