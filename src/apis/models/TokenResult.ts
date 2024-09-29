/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TokenResult = {
    /**
     * @type {(string )}
     * @memberof TokenResult
     */
    access_token: string;
    /**
     * @type {(string )}
     * @memberof TokenResult
     */
    token_type: string;
    /**
     * 过期时间，单位：秒
     *
     * @type {(number )}
     * @memberof TokenResult
     */
    expires_in: number;
    /**
     * @type {(string )}
     * @memberof TokenResult
     */
    refresh_token?: string;
    /**
     * 创建时间
     */
    creation_time?: string;
};

