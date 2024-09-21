export type LoginInput = {
  account: string;
  password: string;
  is_remember?: boolean;
  validate_code: string;
};

export type LoginDto = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
};
