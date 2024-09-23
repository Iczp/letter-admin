/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppInfo } from '../models/AppInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AppService {
    /**
     * 关于 App Test
     * @returns any
     * @throws ApiError
     */
    public static appControllerGetInfo(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/test',
        });
    }
    /**
     * get tables
     * @returns any
     * @throws ApiError
     */
    public static appControllerGetTables(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tables',
        });
    }
    /**
     * get table
     * @param name
     * @returns any
     * @throws ApiError
     */
    public static appControllerGetTable(
        name: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/table',
            query: {
                'name': name,
            },
        });
    }
    /**
     * 关于 App 信息
     * 返回 AppInfo
     * @returns AppInfo Successfully.
     * @throws ApiError
     */
    public static appControllerGetAbout(): CancelablePromise<AppInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/about',
        });
    }
}
