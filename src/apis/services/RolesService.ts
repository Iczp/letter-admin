/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExcelUploadInput } from '../models/ExcelUploadInput';
import type { RoleCreateInput } from '../models/RoleCreateInput';
import type { RoleDetailDto } from '../models/RoleDetailDto';
import type { RolePagedResult } from '../models/RolePagedResult';
import type { RoleUpdateInput } from '../models/RoleUpdateInput';
import type { SetPermissionsInput } from '../models/SetPermissionsInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RolesService {
    /**
     * 角色列表
     * @returns RolePagedResult
     * @throws ApiError
     */
    public static rolesControllerGetList({
        keyword,
        maxResultCount,
        skip,
        sort,
        permissionCode,
        userId,
        isPublic,
        isStatic,
        isDefault,
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
         * 权限编码
         */
        permissionCode?: 'Users_Create' | 'Users_Update' | 'Users_GetItem' | 'Users_GetList' | 'Users_Delete' | 'Users_Excel_Tpl' | 'Users_Excel_Import' | 'Users_Excel_Ouput' | 'Users_Set_IsEnabled' | 'Roles_Create' | 'Roles_Update' | 'Roles_GetItem' | 'Roles_GetList' | 'Roles_Delete' | 'Roles_Excel_Tpl' | 'Roles_Excel_Import' | 'Roles_Excel_Ouput' | 'Roles_Set_IsEnabled' | 'Roles_Set_Permissions' | 'AuditLog_Create' | 'AuditLog_Update' | 'AuditLog_GetItem' | 'AuditLog_GetList' | 'AuditLog_Delete' | 'AuditLog_Excel_Tpl' | 'AuditLog_Excel_Import' | 'AuditLog_Excel_Ouput' | 'AuditLog_Set_Permissions' | 'Activity_Create' | 'Activity_Update' | 'Activity_GetItem' | 'Activity_GetList' | 'Activity_Delete' | 'Activity_Excel_Tpl' | 'Activity_Excel_Import' | 'Activity_Excel_Ouput' | 'Activity_Set_IsEnabled' | 'Activity_GetList_ByCurrentUser' | 'ActivityCustomer_Create' | 'ActivityCustomer_Update' | 'ActivityCustomer_GetItem' | 'ActivityCustomer_GetList' | 'ActivityCustomer_Delete' | 'ActivityCustomer_Excel_Tpl' | 'ActivityCustomer_Excel_Import' | 'ActivityCustomer_Excel_Ouput' | 'ActivityCustomer_Set_IsChecked' | 'ActivityCustomer_Set_IsInvited' | 'ActivityCustomer_Set_IsGifed' | 'ActivityCustomer_Set_IsEnabled' | 'ErpUsers_GetItem' | 'ErpUsers_GetList' | 'InviterConfig_Create' | 'InviterConfig_Update' | 'InviterConfig_GetItem' | 'InviterConfig_GetList' | 'InviterConfig_Delete' | 'InviterConfig_Excel_Tpl' | 'InviterConfig_Excel_Import' | 'InviterConfig_Excel_Ouput' | 'InviterConfig_Set_IsEnabled' | 'InviterConfig_GetItem_ByCurrentUser' | 'ActivityCustomerInviters_Create' | 'ActivityCustomerInviters_Update' | 'ActivityCustomerInviters_GetItem' | 'ActivityCustomerInviters_GetList' | 'ActivityCustomerInviters_Delete' | 'ActivityCustomerInviters_Excel_Tpl' | 'ActivityCustomerInviters_Excel_Import' | 'ActivityCustomerInviters_Excel_Ouput' | 'ActivityCustomerInviters_Set_IsEnabled',
        /**
         * 用户ID
         */
        userId?: string,
        /**
         * 是否公开
         */
        isPublic?: boolean,
        /**
         * 是否固定
         */
        isStatic?: boolean,
        /**
         * 是否默认
         */
        isDefault?: boolean,
        /**
         * 是否可用
         */
        isEnabled?: boolean,
    }): CancelablePromise<RolePagedResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/roles',
            query: {
                'keyword': keyword,
                'maxResultCount': maxResultCount,
                'skip': skip,
                'sort': sort,
                'permission_code': permissionCode,
                'user_id': userId,
                'is_public': isPublic,
                'is_static': isStatic,
                'is_default': isDefault,
                'is_enabled': isEnabled,
            },
        });
    }
    /**
     * 创建角色
     * @returns RoleDetailDto
     * @throws ApiError
     */
    public static rolesControllerCreate({
        requestBody,
    }: {
        requestBody: RoleCreateInput,
    }): CancelablePromise<RoleDetailDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/roles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 角色详情
     * @returns RoleDetailDto
     * @throws ApiError
     */
    public static rolesControllerGetItem({
        id,
    }: {
        id: string,
    }): CancelablePromise<RoleDetailDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/roles/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 修改角色
     * @returns RoleDetailDto
     * @throws ApiError
     */
    public static rolesControllerUpdate({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: RoleUpdateInput,
    }): CancelablePromise<RoleDetailDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/roles/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除角色
     * @returns any
     * @throws ApiError
     */
    public static rolesControllerDelete({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/roles/{id}',
            query: {
                'id': id,
            },
        });
    }
    /**
     * 设置权限
     * @returns any
     * @throws ApiError
     */
    public static rolesControllerSetPermissions({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: SetPermissionsInput,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/roles/permissions/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 启用/禁用
     * 启用/禁用
     * @returns any
     * @throws ApiError
     */
    public static rolesControllerSetIsEnabled({
        id,
        isEnabled,
    }: {
        id: string,
        isEnabled: boolean,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/roles/enabled/{id}',
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
    public static rolesControllerGetExcelTemplate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/roles/excel/tpl',
        });
    }
    /**
     * 导出数据到 Excel
     * Excel 数据
     * @returns any
     * @throws ApiError
     */
    public static rolesControllerExportExcel(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/roles/excel/output',
        });
    }
    /**
     * 导入数据
     * 请从 "/xxx/excel/tpl" 中下载模板
     * @returns any
     * @throws ApiError
     */
    public static rolesControllerImportExcel({
        formData,
    }: {
        /**
         * Excel
         */
        formData: ExcelUploadInput,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/roles/excel/import',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
