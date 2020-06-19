import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import AppError from '../errors/AppErrors';
import auth from '../config/auth';

import Company from '../models/companys';

interface Request {
  name: string;
  password: string;
}

interface Response {
  company: Company;
  token: string;
}

class AutheticationCompanyService {
  public async run({ name, password }: Request): Promise<Response> {
    const companyRepositorys = getRepository(Company);
    const company = await companyRepositorys.findOne({
      where: { name },
    });

    if (!company) {
      throw new AppError('Incorrect name/password cobination');
    }

    const passwordMatched = await compare(password, company.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect name/password cobination');
    }

    const token = sign({}, auth.jwt.secret, {
      subject: company.id,
      expiresIn: auth.jwt.expireIn,
    });

    return {
      company,
      token,
    };
  }
}

export default AutheticationCompanyService;
