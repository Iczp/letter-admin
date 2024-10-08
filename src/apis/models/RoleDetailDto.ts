/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RoleDetailDto = {
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
   * 是否启用
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
  name: string;
  code: string;
  /**
   * 是否公开
   */
  is_public?: boolean;
  /**
   * 是否固定
   */
  is_static?: boolean;
  /**
   * 是否默认
   */
  is_default?: boolean;
};
