/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserUpdateInput = {
    /**
     * password
     */
    account: string;
    /**
     * password
     */
    passoword: string;
    name: string;
    userType?: UserUpdateInput.userType;
    gender?: UserUpdateInput.gender;
    phone?: string;
    is_enabled: boolean;
};
export namespace UserUpdateInput {
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

