/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityCustomerInvitersCreateInput } from '../models/ActivityCustomerInvitersCreateInput';
import type { ActivityCustomerInvitersDetailDto } from '../models/ActivityCustomerInvitersDetailDto';
import type { ActivityCustomerInvitersDto } from '../models/ActivityCustomerInvitersDto';
import type { ActivityCustomerInvitersUpdateInput } from '../models/ActivityCustomerInvitersUpdateInput';
import type { ExcelUploadInput } from '../models/ExcelUploadInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ActivityCustomerInvitersService {
    /**
     * 客户列表
     * @returns ActivityCustomerInvitersDto
     * @throws ApiError
     */
    public static activityCustomerInvitersControllerGetList({
        keyword,
        maxResultCount,
        skip,
        sort,
        activityId,
        inviterUserId,
        inviterErpUserId,
        isInvited,
        isChecked,
        isEnabled,
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
         * 活动Id
         */
        activityId?: string,
        /**
         * 邀请人用户Id
         */
        inviterUserId?: string,
        /**
         * 邀请人用户ErpUserId
         */
        inviterErpUserId?: string,
        isInvited?: boolean,
        isChecked?: boolean,
        /**
         * 是否可用
         */
        isEnabled?: boolean,
    }): CancelablePromise<Array<ActivityCustomerInvitersDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/activity-customer-inviters',
            query: {
                'keyword': keyword,
                'maxResultCount': maxResultCount,
                'skip': skip,
                'sort': sort,
                'activity_id': activityId,
                'inviter_user_id': inviterUserId,
                'inviter_erp_user_id': inviterErpUserId,
                'is_invited': isInvited,
                'is_checked': isChecked,
                'is_enabled': isEnabled,
            },
        });
    }
    /**
     * 创建客户
     * @returns ActivityCustomerInvitersDetailDto
     * @throws ApiError
     */
    public static activityCustomerInvitersControllerCreate({
        requestBody,
    }: {
        requestBody: ActivityCustomerInvitersCreateInput,
    }): CancelablePromise<ActivityCustomerInvitersDetailDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/activity-customer-inviters',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 客户详情
     * @returns ActivityCustomerInvitersDetailDto
     * @throws ApiError
     */
    public static activityCustomerInvitersControllerGetItem({
        id,
    }: {
        id: string,
    }): CancelablePromise<ActivityCustomerInvitersDetailDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/activity-customer-inviters/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 修改客户
     * @returns ActivityCustomerInvitersDetailDto
     * @throws ApiError
     */
    public static activityCustomerInvitersControllerUpdate({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: ActivityCustomerInvitersUpdateInput,
    }): CancelablePromise<ActivityCustomerInvitersDetailDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/activity-customer-inviters/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除客户
     * @returns any
     * @throws ApiError
     */
    public static activityCustomerInvitersControllerDelete({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/activity-customer-inviters/{id}',
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
    public static activityCustomerInvitersControllerSetIsEnabled({
        id,
        isEnabled,
    }: {
        id: string,
        isEnabled: boolean,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/activity-customer-inviters/enabled/{id}',
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
    public static activityCustomerInvitersControllerGetExcelTemplate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/activity-customer-inviters/excel/tpl',
        });
    }
    /**
     * 导出数据到 Excel
     * Excel 数据
     * @returns any
     * @throws ApiError
     */
    public static activityCustomerInvitersControllerExportExcel(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/activity-customer-inviters/excel/output',
        });
    }
    /**
     * 导入数据
     * 请从 "/xxx/excel/tpl" 中下载模板
     * @returns any
     * @throws ApiError
     */
    public static activityCustomerInvitersControllerImportExcel({
        formData,
    }: {
        /**
         * Excel
         */
        formData: ExcelUploadInput,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/activity-customer-inviters/excel/import',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
