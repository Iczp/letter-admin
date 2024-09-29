/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditLogDto } from './AuditLogDto';
export type AuditLogPagedResult = {
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
    items: Array<AuditLogDto>;
};

