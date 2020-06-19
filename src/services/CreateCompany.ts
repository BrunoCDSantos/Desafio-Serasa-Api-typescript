import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Company from '../models/companys';
import AppError from '../errors/AppErrors';

interface Request {
  name: string;
  password: string;
}

class CreateCompany {
  public async run({ name, password }: Request): Promise<Company> {
    const companyRepositorys = getRepository(Company);
    const hashedPassword = await hash(password, 8);

    const checkUserExists = await companyRepositorys.findOne({
      where: { name },
    });

    if (checkUserExists) {
      throw new AppError('Name address already used', 401);
    }

    const company = companyRepositorys.create({
      name,
      password: hashedPassword,
      score: 50,
    });

    await companyRepositorys.save(company);

    return company;
  }
}

export default CreateCompany;
