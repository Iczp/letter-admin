/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExcelUploadInput } from '../models/ExcelUploadInput';
import type { UserCreateInput } from '../models/UserCreateInput';
import type { UserDetailDto } from '../models/UserDetailDto';
import type { UserPagedResult } from '../models/UserPagedResult';
import type { UserUpdateInput } from '../models/UserUpdateInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * 用户列表
     * @returns UserPagedResult
     * @throws ApiError
     */
    public static usersControllerGetList({
        keyword,
        maxResultCount,
        skip,
        sort,
        role,
        erpUserId,
        userType,
        gender,
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
         * 角色ID/角色名称/角色code
         */
        role?: string,
        /**
         * ERP 用户ID
         */
        erpUserId?: string,
        userType?: 'Unset' | 'Customer' | 'ShopManager',
        gender?: 'Unknown' | 'Male' | 'Female',
        isEnabled?: boolean,
    }): CancelablePromise<UserPagedResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user',
            query: {
                'keyword': keyword,
                'maxResultCount': maxResultCount,
                'skip': skip,
                'sort': sort,
                'role': role,
                'erp_user_id': erpUserId,
                'userType': userType,
                'gender': gender,
                'is_enabled': isEnabled,
            },
        });
    }
    /**
     * 创建用户
     * @returns UserDetailDto
     * @throws ApiError
     */
    public static usersControllerCreate({
        requestBody,
    }: {
        requestBody: UserCreateInput,
    }): CancelablePromise<UserDetailDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 用户详情
     * @returns UserDetailDto
     * @throws ApiError
     */
    public static usersControllerGetItem({
        id,
    }: {
        id: string,
    }): CancelablePromise<UserDetailDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 修改用户
     * @returns UserDetailDto
     * @throws ApiError
     */
    public static usersControllerUpdate({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UserUpdateInput,
    }): CancelablePromise<UserDetailDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user/{id}',
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
    public static usersControllerSetIsEnabled({
        id,
        isEnabled,
    }: {
        id: string,
        isEnabled: boolean,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/enabled/{id}',
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
    public static usersControllerGetExcelTemplate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/excel/tpl',
        });
    }
    /**
     * 导出数据到 Excel
     * Excel 数据
     * @returns any
     * @throws ApiError
     */
    public static usersControllerExportExcel(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/excel/output',
        });
    }
    /**
     * 导入数据
     * 请从 "/xxx/excel/tpl" 中下载模板
     * @returns any
     * @throws ApiError
     */
    public static usersControllerImportExcel({
        formData,
    }: {
        /**
         * Excel
         */
        formData: ExcelUploadInput,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/excel/import',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
