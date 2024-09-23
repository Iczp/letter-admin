/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ActivityCustomerInvitersCreateInput = {
    customer_name: string;
    customer_gender: ActivityCustomerInvitersCreateInput.customer_gender;
    customer_phone: string;
    inviter_name: string;
    is_enabled: boolean;
    activity_id: string;
};
export namespace ActivityCustomerInvitersCreateInput {
    export enum customer_gender {
        UNKNOWN = 'Unknown',
        MALE = 'Male',
        FEMALE = 'Female',
    }
}

