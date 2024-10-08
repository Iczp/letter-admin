/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditLogDetailDto } from '../models/AuditLogDetailDto';
import type { AuditLogPagedResult } from '../models/AuditLogPagedResult';
import type { ExcelUploadInput } from '../models/ExcelUploadInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuditsService {
  /**
   * 审计日志列表
   * @returns AuditLogPagedResult
   * @throws ApiError
   */
  public static auditsControllerGetList({
    keyword,
    maxResultCount,
    skip,
    sort,
    httpStatus,
    startHttpStatus,
    endHttpStatus,
    httpMethod,
    clientId,
    userId,
    className,
    handlerName,
    ip,
  }: {
    /**
     * 关键字
     */
    keyword?: string;
    /**
     * 每页显示数量
     */
    maxResultCount?: number;
    /**
     * skin
     */
    skip?: number;
    /**
     * 排序
     */
    sort?: string;
    /**
     * http_status
     */
    httpStatus?: number;
    /**
     * http_status
     */
    startHttpStatus?: number;
    /**
     * http_status
     */
    endHttpStatus?: number;
    /**
     * http_method
     */
    httpMethod?: string;
    /**
     * client_id
     */
    clientId?: string;
    /**
     * user_id
     */
    userId?: string;
    /**
     * class_name
     */
    className?: string;
    /**
     * handler_name
     */
    handlerName?: string;
    /**
     * IP
     */
    ip?: string;
  }): CancelablePromise<AuditLogPagedResult> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/audits',
      query: {
        keyword: keyword,
        maxResultCount: maxResultCount,
        skip: skip,
        sort: sort,
        http_status: httpStatus,
        start_http_status: startHttpStatus,
        end_http_status: endHttpStatus,
        http_method: httpMethod,
        client_id: clientId,
        user_id: userId,
        class_name: className,
        handler_name: handlerName,
        ip: ip,
      },
    });
  }
  /**
   * 删除
   * @returns any
   * @throws ApiError
   */
  public static auditsControllerDeleteMany({ id }: { id: Array<string> }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/audits',
      query: {
        id: id,
      },
    });
  }
  /**
   * 审计日志详情
   * @returns AuditLogDetailDto
   * @throws ApiError
   */
  public static auditsControllerGetItem({
    id,
  }: {
    id: string;
  }): CancelablePromise<AuditLogDetailDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/audits/{id}',
      path: {
        id: id,
      },
    });
  }
  /**
   * 启用/禁用
   * 启用/禁用
   * @returns any
   * @throws ApiError
   */
  public static auditsControllerSetIsEnabled({
    id,
    isEnabled,
  }: {
    id: string;
    isEnabled: boolean;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/audits/enabled/{id}',
      path: {
        id: id,
      },
      query: {
        is_enabled: isEnabled,
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
   * @returns any
   * @throws ApiError
   */
  public static auditsControllerImportExcel({
    formData,
  }: {
    /**
     * Excel
     */
    formData: ExcelUploadInput;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/audits/excel/import',
      formData: formData,
      mediaType: 'multipart/form-data',
    });
  }
}
