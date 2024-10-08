/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserDto = {
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
  /**
   * 账号
   */
  account: string;
  /**
   * 名称
   */
  name: string;
  phone?: string;
  user_type?: UserDto.user_type;
  erp_user_id?: string;
};
export namespace UserDto {
  export enum user_type {
    UNSET = 'Unset',
    CUSTOMER = 'Customer',
    SHOP_MANAGER = 'ShopManager',
  }
}
