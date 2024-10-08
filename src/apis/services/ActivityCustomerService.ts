/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityCustomerCreateInput } from '../models/ActivityCustomerCreateInput';
import type { ActivityCustomerDetailDto } from '../models/ActivityCustomerDetailDto';
import type { ActivityCustomerPagedResult } from '../models/ActivityCustomerPagedResult';
import type { ActivityCustomerUpdateInput } from '../models/ActivityCustomerUpdateInput';
import type { ExcelUploadInput } from '../models/ExcelUploadInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ActivityCustomerService {
  /**
   * [活动客户]列表
   * @returns ActivityCustomerPagedResult
   * @throws ApiError
   */
  public static activityCustomerControllerGetList({
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
     * 活动Id
     */
    activityId?: string;
    /**
     * 邀请人用户Id
     */
    inviterUserId?: string;
    /**
     * 邀请人用户ErpUserId
     */
    inviterErpUserId?: string;
    isInvited?: boolean;
    isChecked?: boolean;
    /**
     * 是否可用
     */
    isEnabled?: boolean;
  }): CancelablePromise<ActivityCustomerPagedResult> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/activity-customer',
      query: {
        keyword: keyword,
        maxResultCount: maxResultCount,
        skip: skip,
        sort: sort,
        activity_id: activityId,
        inviter_user_id: inviterUserId,
        inviter_erp_user_id: inviterErpUserId,
        is_invited: isInvited,
        is_checked: isChecked,
        is_enabled: isEnabled,
      },
    });
  }
  /**
   * 创建[活动客户]
   * @returns ActivityCustomerDetailDto
   * @throws ApiError
   */
  public static activityCustomerControllerCreate({
    requestBody,
  }: {
    requestBody: ActivityCustomerCreateInput;
  }): CancelablePromise<ActivityCustomerDetailDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/activity-customer',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * 删除
   * @returns any
   * @throws ApiError
   */
  public static activityCustomerControllerDeleteMany({
    id,
  }: {
    id: Array<string>;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/activity-customer',
      query: {
        id: id,
      },
    });
  }
  /**
   * [活动客户]详情
   * @returns ActivityCustomerDetailDto
   * @throws ApiError
   */
  public static activityCustomerControllerGetItem({
    id,
  }: {
    id: string;
  }): CancelablePromise<ActivityCustomerDetailDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/activity-customer/{id}',
      path: {
        id: id,
      },
    });
  }
  /**
   * 修改[活动客户]
   * @returns ActivityCustomerDetailDto
   * @throws ApiError
   */
  public static activityCustomerControllerUpdate({
    id,
    requestBody,
  }: {
    id: string;
    requestBody: ActivityCustomerUpdateInput;
  }): CancelablePromise<ActivityCustomerDetailDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/activity-customer/{id}',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * 设置 是否签到
   * @returns any
   * @throws ApiError
   */
  public static activityCustomerControllerSetIsChecked({
    id,
    isChecked,
  }: {
    id: string;
    isChecked: boolean;
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/activity-customer/checked/{id}',
      path: {
        id: id,
      },
      query: {
        is_checked: isChecked,
      },
    });
  }
  /**
   * 设置 是否已邀请
   * @returns any
   * @throws ApiError
   */
  public static activityCustomerControllerSetIsActived({
    id,
    isInvited,
  }: {
    id: string;
    isInvited: boolean;
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/activity-customer/invited/{id}',
      path: {
        id: id,
      },
      query: {
        is_invited: isInvited,
      },
    });
  }
  /**
   * [活动客户]导出 excel
   * 导出excel 单次导出数据不能太多
   * @returns any
   * @throws ApiError
   */
  public static activityCustomerControllerExportExcel({
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
     * 活动Id
     */
    activityId?: string;
    /**
     * 邀请人用户Id
     */
    inviterUserId?: string;
    /**
     * 邀请人用户ErpUserId
     */
    inviterErpUserId?: string;
    isInvited?: boolean;
    isChecked?: boolean;
    /**
     * 是否可用
     */
    isEnabled?: boolean;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/activity-customer/excel/output',
      query: {
        keyword: keyword,
        maxResultCount: maxResultCount,
        skip: skip,
        sort: sort,
        activity_id: activityId,
        inviter_user_id: inviterUserId,
        inviter_erp_user_id: inviterErpUserId,
        is_invited: isInvited,
        is_checked: isChecked,
        is_enabled: isEnabled,
      },
    });
  }
  /**
   * 启用/禁用
   * 启用/禁用
   * @returns any
   * @throws ApiError
   */
  public static activityCustomerControllerSetIsEnabled({
    id,
    isEnabled,
  }: {
    id: string;
    isEnabled: boolean;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/activity-customer/enabled/{id}',
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
  public static activityCustomerControllerGetExcelTemplate(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/activity-customer/excel/tpl',
    });
  }
  /**
   * 导入数据
   * 请从 "/xxx/excel/tpl" 中下载模板
   * @returns any
   * @throws ApiError
   */
  public static activityCustomerControllerImportExcel({
    formData,
  }: {
    /**
     * Excel
     */
    formData: ExcelUploadInput;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/activity-customer/excel/import',
      formData: formData,
      mediaType: 'multipart/form-data',
    });
  }
}
