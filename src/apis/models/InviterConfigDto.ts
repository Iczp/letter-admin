/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityDto } from './ActivityDto';
import type { UserSimpleDto } from './UserSimpleDto';
export type InviterConfigDto = {
    /**
     * id
     */
    id: string;
    /**
     * 创建时间
     */
    creation_time: string;
    /**
     * 最后修改时间
     */
    last_modification_time: string;
    /**
     * 是否可用
     */
    is_enabled: boolean;
    /**
     * 删除时间
     */
    deletion_time: string;
    /**
     * 是否删除
     */
    is_deleted: boolean;
    /**
     * 最大邀请人数
     */
    max_count: number;
    /**
     * 活动
     */
    activity: ActivityDto;
    /**
     * 邀请人
     */
    inviter: UserSimpleDto;
};

