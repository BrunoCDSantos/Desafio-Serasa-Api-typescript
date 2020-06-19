import { Router } from 'express';
import company from './company.routes';
import account from './account.routes';
import session from './session.routes';

const route = Router();

route.use('/company', company);
route.use('/account', account);
route.use('/session', session);

export default route;
