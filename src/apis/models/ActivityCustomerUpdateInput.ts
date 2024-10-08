/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ActivityCustomerUpdateInput = {
  customer_name: string;
  customer_gender?: ActivityCustomerUpdateInput.customer_gender;
  customer_phone?: string;
  inviter_name: string;
  is_enabled: boolean;
};
export namespace ActivityCustomerUpdateInput {
  export enum customer_gender {
    UNKNOWN = 'Unknown',
    MALE = 'Male',
    FEMALE = 'Female',
  }
}
