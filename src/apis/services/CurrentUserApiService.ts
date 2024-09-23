/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityGetListResult } from '../models/ActivityGetListResult';
import type { InviterConfigDetailDto } from '../models/InviterConfigDetailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CurrentUserApiService {
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
}
