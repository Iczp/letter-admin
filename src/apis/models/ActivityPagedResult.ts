/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityDto } from './ActivityDto';
export type ActivityPagedResult = {
    /**
     * 输入参数
     */
    input?: Record<string, any>;
    /**
     * 总数
     */
    totalCount: number;
    /**
     * 列表项
     */
    items: Array<ActivityDto>;
};

