/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityCreateInput } from '../models/ActivityCreateInput';
import type { ActivityDetailDto } from '../models/ActivityDetailDto';
import type { ActivityPagedResult } from '../models/ActivityPagedResult';
import type { ActivityUpdateInput } from '../models/ActivityUpdateInput';
import type { ExcelUploadInput } from '../models/ExcelUploadInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ActivitiesService {
    /**
     * 活动列表
     * @returns ActivityPagedResult
     * @throws ApiError
     */
    public static activitiesControllerGetList({
        keyword,
        maxResultCount,
        skip,
        sort,
        isEnabled,
        userId,
        erpUserId,
        startTime,
        endTime,
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
        isEnabled?: boolean,
        /**
         * 用户ID
         */
        userId?: string,
        /**
         * ERP用户ID
         */
        erpUserId?: string,
        /**
         * 起始时间
         */
        startTime?: string,
        /**
         * 结束时间
         */
        endTime?: string,
    }): CancelablePromise<ActivityPagedResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/activities',
            query: {
                'keyword': keyword,
                'maxResultCount': maxResultCount,
                'skip': skip,
                'sort': sort,
                'is_enabled': isEnabled,
                'user_id': userId,
                'erp_user_id': erpUserId,
                'start_time': startTime,
                'end_time': endTime,
            },
        });
    }
    /**
     * 创建活动
     * @returns ActivityDetailDto
     * @throws ApiError
     */
    public static activitiesControllerCreate({
        requestBody,
    }: {
        requestBody: ActivityCreateInput,
    }): CancelablePromise<ActivityDetailDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/activities',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 活动列表
     * @returns ActivityPagedResult
     * @throws ApiError
     */
    public static activitiesControllerGetListByCurrentUser(): CancelablePromise<ActivityPagedResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/activities/current-user/list',
        });
    }
    /**
     * 活动详情
     * @returns ActivityDetailDto
     * @throws ApiError
     */
    public static activitiesControllerGetItem({
        id,
    }: {
        id: string,
    }): CancelablePromise<ActivityDetailDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/activities/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 修改活动
     * @returns ActivityDetailDto
     * @throws ApiError
     */
    public static activitiesControllerUpdate({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: ActivityUpdateInput,
    }): CancelablePromise<ActivityDetailDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/activities/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除活动
     * @returns any
     * @throws ApiError
     */
    public static activitiesControllerDelete({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/activities/{id}',
            query: {
                'id': id,
            },
        });
    }
    /**
     * 启用/禁用
     * 启用/禁用
     * @returns any
     * @throws ApiError
     */
    public static activitiesControllerSetIsEnabled({
        id,
        isEnabled,
    }: {
        id: string,
        isEnabled: boolean,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/activities/enabled/{id}',
            path: {
                'id': id,
            },
            query: {
                'is_enabled': isEnabled,
            },
        });
    }
    /**
     * excel 模板
     * excel 模板
     * @returns any
     * @throws ApiError
     */
    public static activitiesControllerGetExcelTemplate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/activities/excel/tpl',
        });
    }
    /**
     * 导出数据到 Excel
     * Excel 数据
     * @returns any
     * @throws ApiError
     */
    public static activitiesControllerExportExcel(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/activities/excel/output',
        });
    }
    /**
     * 导入数据
     * 请从 "/xxx/excel/tpl" 中下载模板
     * @returns any
     * @throws ApiError
     */
    public static activitiesControllerImportExcel({
        formData,
    }: {
        /**
         * Excel
         */
        formData: ExcelUploadInput,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/activities/excel/import',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
