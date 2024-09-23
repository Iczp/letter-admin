/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserDetailDto = {
    id: string;
    /**
     * 账号
     */
    account: string;
    name: string;
    phone?: string;
    user_type?: UserDetailDto.user_type;
    is_enabled?: boolean;
    erp_user_id?: string;
};
export namespace UserDetailDto {
    export enum user_type {
        UNSET = 'Unset',
        CUSTOMER = 'Customer',
        SHOP_MANAGER = 'ShopManager',
    }
}

