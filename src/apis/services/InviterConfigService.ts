/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExcelUploadInput } from '../models/ExcelUploadInput';
import type { InviterConfigCreateInput } from '../models/InviterConfigCreateInput';
import type { InviterConfigDetailDto } from '../models/InviterConfigDetailDto';
import type { InviterConfigPagedResult } from '../models/InviterConfigPagedResult';
import type { InviterConfigUpdateInput } from '../models/InviterConfigUpdateInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InviterConfigService {
    /**
     * 邀请人列表
     * @returns InviterConfigPagedResult
     * @throws ApiError
     */
    public static inviterConfigControllerGetList({
        keyword,
        maxResultCount,
        skip,
        sort,
        activityId,
        inviterUserId,
        inviterErpUserId,
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
         * 活动ID
         */
        activityId?: string,
        /**
         * 邀请人用户ID
         */
        inviterUserId?: string,
        /**
         * 邀请人ERP User ID
         */
        inviterErpUserId?: string,
    }): CancelablePromise<InviterConfigPagedResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/inviter-config',
            query: {
                'keyword': keyword,
                'maxResultCount': maxResultCount,
                'skip': skip,
                'sort': sort,
                'activity_id': activityId,
                'inviter_user_id': inviterUserId,
                'inviter_erp_user_id': inviterErpUserId,
            },
        });
    }
    /**
     * 创建邀请人
     * @returns InviterConfigDetailDto
     * @throws ApiError
     */
    public static inviterConfigControllerCreate({
        requestBody,
    }: {
        requestBody: InviterConfigCreateInput,
    }): CancelablePromise<InviterConfigDetailDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/inviter-config',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除
     * @returns any
     * @throws ApiError
     */
    public static inviterConfigControllerDeleteMany({
        id,
    }: {
        id: Array<string>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/inviter-config',
            query: {
                'id': id,
            },
        });
    }
    /**
     * 邀请人详情
     * @returns InviterConfigDetailDto
     * @throws ApiError
     */
    public static inviterConfigControllerGetItem({
        id,
    }: {
        id: string,
    }): CancelablePromise<InviterConfigDetailDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/inviter-config/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 修改邀请人
     * @returns InviterConfigDetailDto
     * @throws ApiError
     */
    public static inviterConfigControllerUpdate({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: InviterConfigUpdateInput,
    }): CancelablePromise<InviterConfigDetailDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/inviter-config/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 邀请人详情
     * @returns InviterConfigDetailDto
     * @throws ApiError
     */
    public static inviterConfigControllerGetItemByCurrentUser(): CancelablePromise<InviterConfigDetailDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/inviter-config/current-user/item',
        });
    }
    /**
     * 启用/禁用
     * 启用/禁用
     * @returns any
     * @throws ApiError
     */
    public static inviterConfigControllerSetIsEnabled({
        id,
        isEnabled,
    }: {
        id: string,
        isEnabled: boolean,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/inviter-config/enabled/{id}',
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
    public static inviterConfigControllerGetExcelTemplate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/inviter-config/excel/tpl',
        });
    }
    /**
     * 导出数据到 Excel
     * Excel 数据
     * @returns any
     * @throws ApiError
     */
    public static inviterConfigControllerExportExcel(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/inviter-config/excel/output',
        });
    }
    /**
     * 导入数据
     * 请从 "/xxx/excel/tpl" 中下载模板
     * @returns any
     * @throws ApiError
     */
    public static inviterConfigControllerImportExcel({
        formData,
    }: {
        /**
         * Excel
         */
        formData: ExcelUploadInput,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/inviter-config/excel/import',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
