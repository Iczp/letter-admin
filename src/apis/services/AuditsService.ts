/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditLogDetailDto } from '../models/AuditLogDetailDto';
import type { ExcelUploadInput } from '../models/ExcelUploadInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuditsService {
    /**
     * 审计日志列表
     * @param keyword 关键字
     * @param maxResultCount 每页显示数量
     * @param skip skin
     * @param sort 排序
     * @param httpStatus http_status
     * @param startHttpStatus http_status
     * @param endHttpStatus http_status
     * @param httpMethod http_method
     * @param clientId client_id
     * @param userId user_id
     * @param className class_name
     * @param handlerName handler_name
     * @param ip IP
     * @returns any
     * @throws ApiError
     */
    public static auditsControllerGetList(
        keyword?: string,
        maxResultCount?: number,
        skip?: number,
        sort?: string,
        httpStatus?: number,
        startHttpStatus?: number,
        endHttpStatus?: number,
        httpMethod?: string,
        clientId?: string,
        userId?: string,
        className?: string,
        handlerName?: string,
        ip?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/audits',
            query: {
                'keyword': keyword,
                'maxResultCount': maxResultCount,
                'skip': skip,
                'sort': sort,
                'http_status': httpStatus,
                'start_http_status': startHttpStatus,
                'end_http_status': endHttpStatus,
                'http_method': httpMethod,
                'client_id': clientId,
                'user_id': userId,
                'class_name': className,
                'handler_name': handlerName,
                'ip': ip,
            },
        });
    }
    /**
     * 审计日志详情
     * @param id
     * @returns AuditLogDetailDto
     * @throws ApiError
     */
    public static auditsControllerGetItem(
        id: string,
    ): CancelablePromise<AuditLogDetailDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/audits/{id}',
            path: {
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
    public static auditsControllerSetIsEnabled(
        id: string,
        isEnabled: boolean,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/audits/enabled/{id}',
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
    public static auditsControllerGetExcelTemplate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/audits/excel/tpl',
        });
    }
    /**
     * 导出数据到 Excel
     * Excel 数据
     * @returns any
     * @throws ApiError
     */
    public static auditsControllerExportExcel(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/audits/excel/output',
        });
    }
    /**
     * 导入数据
     * 请从 "/xxx/excel/tpl" 中下载模板
     * @param formData Excel
     * @returns any
     * @throws ApiError
     */
    public static auditsControllerImportExcel(
        formData: ExcelUploadInput,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/audits/excel/import',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
