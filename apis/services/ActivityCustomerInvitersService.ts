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
     * @param keyword 关键字
     * @param maxResultCount 每页显示数量
     * @param skip skin
     * @param sort 排序
     * @param activityId 活动Id
     * @param inviterUserId 邀请人用户Id(当前登录人,不用填)
     * @param inviterErpUserId 邀请人用户ErpUserId(当前登录人,不用填)
     * @param isInvited
     * @param isChecked
     * @param isEnabled 是否可用
     * @returns ActivityCustomerInvitersDto
     * @throws ApiError
     */
    public static activityCustomerInvitersControllerGetList(
        keyword?: string,
        maxResultCount?: number,
        skip?: number,
        sort?: string,
        activityId?: string,
        inviterUserId?: number,
        inviterErpUserId?: number,
        isInvited?: boolean,
        isChecked?: boolean,
        isEnabled?: boolean,
    ): CancelablePromise<Array<ActivityCustomerInvitersDto>> {
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
     * @param requestBody
     * @returns ActivityCustomerInvitersDetailDto
     * @throws ApiError
     */
    public static activityCustomerInvitersControllerCreate(
        requestBody: ActivityCustomerInvitersCreateInput,
    ): CancelablePromise<ActivityCustomerInvitersDetailDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/activity-customer-inviters',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 客户详情
     * @param id
     * @returns ActivityCustomerInvitersDetailDto
     * @throws ApiError
     */
    public static activityCustomerInvitersControllerGetItem(
        id: string,
    ): CancelablePromise<ActivityCustomerInvitersDetailDto> {
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
     * @param id
     * @param requestBody
     * @returns ActivityCustomerInvitersDetailDto
     * @throws ApiError
     */
    public static activityCustomerInvitersControllerUpdate(
        id: string,
        requestBody: ActivityCustomerInvitersUpdateInput,
    ): CancelablePromise<ActivityCustomerInvitersDetailDto> {
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
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static activityCustomerInvitersControllerDelete(
        id: string,
    ): CancelablePromise<any> {
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
     * @param id
     * @param isEnabled
     * @returns any
     * @throws ApiError
     */
    public static activityCustomerInvitersControllerSetIsEnabled(
        id: string,
        isEnabled: boolean,
    ): CancelablePromise<any> {
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
     * @param formData Excel
     * @returns any
     * @throws ApiError
     */
    public static activityCustomerInvitersControllerImportExcel(
        formData: ExcelUploadInput,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/activity-customer-inviters/excel/import',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
