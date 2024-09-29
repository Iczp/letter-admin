/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityDto } from './ActivityDto';
export type ActivityCustomerDto = {
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
    is_enabled?: boolean;
    /**
     * 删除时间
     */
    deletion_time: string;
    /**
     * 是否删除
     */
    is_deleted: boolean;
    customer_name: string;
    customer_phone?: string;
    customer_gender?: ActivityCustomerDto.customer_gender;
    remarks?: string;
    inviter_name?: string;
    is_invited?: boolean;
    is_checked?: boolean;
    activity?: ActivityDto;
};
export namespace ActivityCustomerDto {
    export enum customer_gender {
        UNKNOWN = 'Unknown',
        MALE = 'Male',
        FEMALE = 'Female',
    }
}

