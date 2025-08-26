import { IJwtPayload } from '@application/dtos/responses/user.response';

declare global {
  namespace Express {
    interface Request {
      user?: IJwtPayload;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface User extends IJwtPayload {}
  }
}

export {};
