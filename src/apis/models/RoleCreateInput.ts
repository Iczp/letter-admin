/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RoleCreateInput = {
    name: string;
    /**
     * 是否公开
     */
    is_public?: boolean;
    /**
     * 是否默认
     */
    is_default?: boolean;
    /**
     * 是否启用
     */
    is_enabled?: boolean;
    code: string;
    /**
     * 是否固定
     */
    is_static?: boolean;
};

