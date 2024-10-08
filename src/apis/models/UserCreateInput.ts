/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserCreateInput = {
  /**
   * password
   */
  account: string;
  /**
   * password
   */
  passoword: string;
  name: string;
  userType?: UserCreateInput.userType;
  gender?: UserCreateInput.gender;
  phone?: string;
  is_enabled: boolean;
};
export namespace UserCreateInput {
  export enum userType {
    UNSET = 'Unset',
    CUSTOMER = 'Customer',
    SHOP_MANAGER = 'ShopManager',
  }
  export enum gender {
    UNKNOWN = 'Unknown',
    MALE = 'Male',
    FEMALE = 'Female',
  }
}
