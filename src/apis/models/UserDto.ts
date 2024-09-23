/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserDto = {
    id: string;
    /**
     * 账号
     */
    account: string;
    name: string;
    phone?: string;
    user_type?: UserDto.user_type;
    is_enabled?: boolean;
    erp_user_id?: string;
};
export namespace UserDto {
    export enum user_type {
        UNSET = 'Unset',
        CUSTOMER = 'Customer',
        SHOP_MANAGER = 'ShopManager',
    }
}

