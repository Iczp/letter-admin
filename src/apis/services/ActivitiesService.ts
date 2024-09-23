/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityCreateInput } from '../models/ActivityCreateInput';
import type { ActivityDetailDto } from '../models/ActivityDetailDto';
import type { ActivityGetListResult } from '../models/ActivityGetListResult';
import type { ActivityUpdateInput } from '../models/ActivityUpdateInput';
import type { ExcelUploadInput } from '../models/ExcelUploadInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ActivitiesService {
    /**
     * 活动列表
     * @param keyword 关键字
     * @param maxResultCount 每页显示数量
     * @param skip skin
     * @param sort 排序
     * @param isEnabled
     * @param userId 用户ID
     * @param erpUserId ERP用户ID
     * @param startTime 起始时间
     * @param endTime 结束时间
     * @returns ActivityGetListResult
     * @throws ApiError
     */
    public static activitiesControllerGetList(
        keyword?: string,
        maxResultCount?: number,
        skip?: number,
        sort?: string,
        isEnabled?: boolean,
        userId?: string,
        erpUserId?: string,
        startTime?: string,
        endTime?: string,
    ): CancelablePromise<ActivityGetListResult> {
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
     * @param requestBody
     * @returns ActivityDetailDto
     * @throws ApiError
     */
    public static activitiesControllerCreate(
        requestBody: ActivityCreateInput,
    ): CancelablePromise<ActivityDetailDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/activities',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 活动列表
     * @returns ActivityGetListResult
     * @throws ApiError
     */
    public static activitiesControllerGetListByCurrentUser(): CancelablePromise<ActivityGetListResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/activities/current-user/list',
        });
    }
    /**
     * 活动详情
     * @param id
     * @returns ActivityDetailDto
     * @throws ApiError
     */
    public static activitiesControllerGetItem(
        id: string,
    ): CancelablePromise<ActivityDetailDto> {
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
     * @param id
     * @param requestBody
     * @returns ActivityDetailDto
     * @throws ApiError
     */
    public static activitiesControllerUpdate(
        id: string,
        requestBody: ActivityUpdateInput,
    ): CancelablePromise<ActivityDetailDto> {
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
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static activitiesControllerDelete(
        id: string,
    ): CancelablePromise<any> {
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
     * @param id
     * @param isEnabled
     * @returns any
     * @throws ApiError
     */
    public static activitiesControllerSetIsEnabled(
        id: string,
        isEnabled: boolean,
    ): CancelablePromise<any> {
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
     * @param formData Excel
     * @returns any
     * @throws ApiError
     */
    public static activitiesControllerImportExcel(
        formData: ExcelUploadInput,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/activities/excel/import',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
