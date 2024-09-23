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
     * @param keyword 关键字
     * @param maxResultCount 每页显示数量
     * @param skip skin
     * @param sort 排序
     * @param httpStatus http_status
     * @returns any
     * @throws ApiError
     */
    public static erpUsersControllerFindAll(
        keyword?: string,
        maxResultCount?: number,
        skip?: number,
        sort?: string,
        httpStatus?: number,
    ): CancelablePromise<Record<string, any>> {
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
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static erpUsersControllerFindOne(
        id: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/erp-users/{id}',
            path: {
                'id': id,
            },
        });
    }
}
