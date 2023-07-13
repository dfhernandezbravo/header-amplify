import { AuthCookie } from '@entities/login/login.entity';

type GetShoppingCart = {
  orderFormId: string;
  cookies: AuthCookie[];
  loggedIn: boolean;
};

export type { GetShoppingCart };
