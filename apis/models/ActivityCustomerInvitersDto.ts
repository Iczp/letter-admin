/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityDto } from './ActivityDto';
export type ActivityCustomerInvitersDto = {
    customer_name: string;
    customer_phone: string;
    customer_gender: ActivityCustomerInvitersDto.customer_gender;
    remarks: string;
    inviter_name: string;
    is_invited: boolean;
    is_checked: boolean;
    is_enabled: boolean;
    activity: ActivityDto;
};
export namespace ActivityCustomerInvitersDto {
    export enum customer_gender {
        UNKNOWN = 'Unknown',
        MALE = 'Male',
        FEMALE = 'Female',
    }
}

