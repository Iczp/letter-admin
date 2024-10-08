/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AuditLogDetailDto = {
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
   * 应用名称
   */
  app_name: string;
  /**
   * 用户Id
   */
  user_id: string;
  /**
   * 用户名称
   */
  user_name: string;
  /**
   * 客户端ID
   */
  client_id: string;
  /**
   * 客户端名称
   */
  client_name: string;
  /**
   * IP地址
   */
  ip: string;
  /**
   * 浏览器信息
   */
  browser_info: string;
  /**
   * HOST
   */
  host: string;
  /**
   * URL
   */
  url: string;
  /**
   * HTTP请求方式
   */
  http_method: string;
  /**
   * HTTP状态码
   */
  http_status: string;
  /**
   * 服务名称
   */
  class_name: string;
  /**
   * 方法名称
   */
  handler_name: string;
  /**
   * Headers
   */
  headers: string;
  /**
   * Referer
   */
  referer: string;
  /**
   * Accept Language
   */
  accept_language: string;
  /**
   * Accept Encoding
   */
  accept_encoding: string;
  /**
   * Data
   */
  data: string;
  /**
   * 执行时长
   */
  duration: string;
  /**
   * 执行时间
   */
  excution_time: string;
};
