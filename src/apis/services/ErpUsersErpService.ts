/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ErpUsersErpService {
    /**
     * ERP 用户列表
     * @returns any
     * @throws ApiError
     */
    public static erpUsersControllerFindAll({
        keyword,
        maxResultCount,
        skip,
        sort,
        httpStatus,
    }: {
        /**
         * 关键字
         */
        keyword?: string,
        /**
         * 每页显示数量
         */
        maxResultCount?: number,
        /**
         * skin
         */
        skip?: number,
        /**
         * 排序
         */
        sort?: string,
        /**
         * http_status
         */
        httpStatus?: number,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/erp-users',
            query: {
                'keyword': keyword,
                'maxResultCount': maxResultCount,
                'skip': skip,
                'sort': sort,
                'http_status': httpStatus,
            },
        });
    }
    /**
     * ERP 用户详情
     * @returns any
     * @throws ApiError
     */
    public static erpUsersControllerFindOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/erp-users/{id}',
            path: {
                'id': id,
            },
        });
    }
}
