/* eslint-disable camelcase */
import path from 'path';
import fs from 'fs';
import { getRepository } from 'typeorm';
import Accounts from '../models/accounts';
import upload from '../config/upload';
import AppError from '../errors/AppErrors';

interface Request {
  id_company: string;
  FileName: string;
}

class UpdateFile {
  public async run({ id_company, FileName }: Request): Promise<Accounts> {
    const accountRepositorys = getRepository(Accounts);
    const account = await accountRepositorys.findOne(id_company);

    if (!account) {
      throw new AppError('Account not find', 401);
    }

    if (account) {
      const accountFile = path.join(upload.directory, FileName);
      const accountFileExist = await fs.promises.stat(accountFile);

      if (accountFileExist) {
        await fs.promises.unlink(accountFile);
      }
    }
    account.file = FileName;

    await accountRepositorys.save(account);

    return account;
  }
}

export default UpdateFile;
