// This file is auto-generated by @hey-api/openapi-ts

export type AppInfo = {
  name: string;
  version: string;
  description: string;
  author: string;
  email: string;
  website: string;
};

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
  user_type?: 'Unset' | 'Customer' | 'ShopManager';
  erp_user_id?: string;
};

export enum user_type {
  UNSET = 'Unset',
  CUSTOMER = 'Customer',
  SHOP_MANAGER = 'ShopManager'
}

export type UserPagedResult = {
  /**
   * 输入参数
   */
  input?: {
    [key: string]: unknown;
  };
  /**
   * 总数
   */
  totalCount: number;
  /**
   * 列表项
   */
  items: Array<UserDto>;
};

export type UserDetailDto = {
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
  user_type?: 'Unset' | 'Customer' | 'ShopManager';
  erp_user_id?: string;
};

export type UserCreateInput = {
  /**
   * password
   */
  account: string;
  /**
   * password
   */
  passoword: string;
  name: string;
  userType?: 'Unset' | 'Customer' | 'ShopManager';
  gender?: 'Unknown' | 'Male' | 'Female';
  phone?: string;
  is_enabled: boolean;
};

export enum userType {
  UNSET = 'Unset',
  CUSTOMER = 'Customer',
  SHOP_MANAGER = 'ShopManager'
}

export enum gender {
  UNKNOWN = 'Unknown',
  MALE = 'Male',
  FEMALE = 'Female'
}

export type UserUpdateInput = {
  /**
   * password
   */
  account: string;
  /**
   * password
   */
  passoword: string;
  name: string;
  userType?: 'Unset' | 'Customer' | 'ShopManager';
  gender?: 'Unknown' | 'Male' | 'Female';
  phone?: string;
  is_enabled: boolean;
};

export type ExcelUploadInput = {
  file: Blob | File;
  /**
   * Excel 文件上传参数
   */
  body?: {
    [key: string]: unknown;
  };
};

export type ActivityDto = {
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
  title: string;
  phone?: string;
  user_type?: {
    [key: string]: unknown;
  };
};

export type ActivityPagedResult = {
  /**
   * 输入参数
   */
  input?: {
    [key: string]: unknown;
  };
  /**
   * 总数
   */
  totalCount: number;
  /**
   * 列表项
   */
  items: Array<ActivityDto>;
};

export type ActivityDetailDto = {
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
  title: string;
  phone?: string;
  user_type?: {
    [key: string]: unknown;
  };
};

export type ActivityCreateInput = {
  title: string;
  coverUrl?: string;
  description?: string;
  address?: string;
  content?: string;
  max_count: number;
  start_time?: string;
  end_time?: string;
  is_actived: boolean;
};

export type ActivityUpdateInput = {
  title: string;
  coverUrl?: string;
  description?: string;
  address?: string;
  content?: string;
  max_count: number;
  start_time?: string;
  end_time?: string;
  is_actived: boolean;
  is_enabled: boolean;
};

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
  customer_gender?: 'Unknown' | 'Male' | 'Female';
  remarks?: string;
  inviter_name?: string;
  is_invited?: boolean;
  is_checked?: boolean;
  activity?: ActivityDto;
};

export enum customer_gender {
  UNKNOWN = 'Unknown',
  MALE = 'Male',
  FEMALE = 'Female'
}

export type ActivityCustomerPagedResult = {
  /**
   * 输入参数
   */
  input?: {
    [key: string]: unknown;
  };
  /**
   * 总数
   */
  totalCount: number;
  /**
   * 列表项
   */
  items: Array<ActivityCustomerDto>;
};

export type ActivityCustomerDetailDto = {
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
  customer_gender?: 'Unknown' | 'Male' | 'Female';
  remarks?: string;
  inviter_name?: string;
  is_invited?: boolean;
  is_checked?: boolean;
  activity?: ActivityDto;
};

export type ActivityCustomerCreateInput = {
  customer_name: string;
  customer_gender?: 'Unknown' | 'Male' | 'Female';
  customer_phone?: string;
  inviter_name: string;
  is_enabled: boolean;
  activity_id: string;
};

export type ActivityCustomerUpdateInput = {
  customer_name: string;
  customer_gender?: 'Unknown' | 'Male' | 'Female';
  customer_phone?: string;
  inviter_name: string;
  is_enabled: boolean;
};

export type ActivityCustomerInvitersDto = {
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
  customer_gender?: 'Unknown' | 'Male' | 'Female';
  remarks?: string;
  inviter_name?: string;
  is_invited?: boolean;
  is_checked?: boolean;
  activity?: ActivityDto;
};

export type ActivityCustomerInvitersDetailDto = {
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
  customer_gender?: 'Unknown' | 'Male' | 'Female';
  remarks?: string;
  inviter_name?: string;
  is_invited?: boolean;
  is_checked?: boolean;
  activity?: ActivityDto;
};

export type ActivityCustomerInvitersCreateInput = {
  customer_name: string;
  customer_gender?: 'Unknown' | 'Male' | 'Female';
  customer_phone?: string;
  inviter_name: string;
  is_enabled: boolean;
  activity_id: string;
};

export type ActivityCustomerInvitersUpdateInput = {
  customer_name: string;
  customer_gender?: 'Unknown' | 'Male' | 'Female';
  customer_phone?: string;
  inviter_name: string;
  is_enabled: boolean;
};

export type AuthInput = {
  account: string;
  password: string;
  validate_code: string;
};

export type TokenResult = {
  /**
   * @type {(string )}
   * @memberof TokenResult
   */
  access_token: string;
  /**
   * @type {(string )}
   * @memberof TokenResult
   */
  token_type: string;
  /**
   * 过期时间，单位：秒
   *
   * @type {(number )}
   * @memberof TokenResult
   */
  expires_in: number;
  /**
   * @type {(string )}
   * @memberof TokenResult
   */
  refresh_token?: string;
  /**
   * 创建时间
   */
  creation_time?: string;
};

export type RoleDto = {
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

export type RolePagedResult = {
  /**
   * 输入参数
   */
  input?: {
    [key: string]: unknown;
  };
  /**
   * 总数
   */
  totalCount: number;
  /**
   * 列表项
   */
  items: Array<RoleDto>;
};

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

export type RoleCreateInput = {
  name: string;
  /**
   * 是否公开
   */
  is_public?: boolean;
  /**
   * 是否默认
   */
  is_default?: boolean;
  /**
   * 是否启用
   */
  is_enabled?: boolean;
  code: string;
  /**
   * 是否固定
   */
  is_static?: boolean;
};

export type RoleUpdateInput = {
  name: string;
  /**
   * 是否公开
   */
  is_public?: boolean;
  /**
   * 是否默认
   */
  is_default?: boolean;
  /**
   * 是否启用
   */
  is_enabled?: boolean;
};

export type SetPermissionsInput = {
  /**
   * 权限列表
   */
  permissions: Array<string>;
};

export type AuditLogDto = {
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

export type AuditLogPagedResult = {
  /**
   * 输入参数
   */
  input?: {
    [key: string]: unknown;
  };
  /**
   * 总数
   */
  totalCount: number;
  /**
   * 列表项
   */
  items: Array<AuditLogDto>;
};

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

export type AuditLogCreateInput = {
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

export type AuditLogUpdateInput = {
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

export type ErpUsersDto = {
  /**
   * id
   */
  id: string;
  /**
   * name
   */
  name?: string;
  /**
   * employeeNo
   */
  employeeNo?: string;
  /**
   * organizationId
   */
  organizationId?: string;
  /**
   * http_status
   */
  organizationName?: string;
  /**
   * departmentId
   */
  departmentId?: string;
  /**
   * departmentName
   */
  departmentName?: string;
  /**
   * departmentShortName
   */
  departmentShortName?: string;
  /**
   * departmentEnCode
   */
  departmentEnCode?: string;
  /**
   * parentDeptId
   */
  parentDeptId?: string;
  /**
   * parentDeptName
   */
  parentDeptName?: string;
  /**
   * parentDeptShortName
   */
  parentDeptShortName?: string;
  /**
   * grade
   */
  grade?: string;
  /**
   * employmentStatusName
   */
  employmentStatusName?: string;
  /**
   * employmentStatusId
   */
  employmentStatusId?: string;
  /**
   * headImage
   */
  headImage?: string;
  /**
   * http_status
   */
  jobType?: number;
  /**
   * mobile
   */
  mobile?: string;
  /**
   * spelling
   */
  spelling?: string;
  /**
   * simpleSpelling
   */
  simpleSpelling?: string;
  /**
   * spellingFlag
   */
  spellingFlag?: string;
  /**
   * gender
   */
  gender?: string;
};

export type ErpUsersPagedResult = {
  /**
   * 输入参数
   */
  input?: {
    [key: string]: unknown;
  };
  /**
   * 总数
   */
  totalCount: number;
  /**
   * 列表项
   */
  items: Array<ErpUsersDto>;
};

export type UserSimpleDto = {
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
   * 账号
   */
  account: string;
  /**
   * 名称
   */
  name: string;
};

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

export type InviterConfigPagedResult = {
  /**
   * 输入参数
   */
  input?: {
    [key: string]: unknown;
  };
  /**
   * 总数
   */
  totalCount: number;
  /**
   * 列表项
   */
  items: Array<InviterConfigDto>;
};

export type InviterConfigDetailDto = {
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

export type InviterConfigCreateInput = {
  /**
   * 最大邀请人数
   */
  max_count: number;
  /**
   * 是否启用
   */
  is_enabled?: boolean;
  /**
   * 活动ID
   */
  activity_id: string;
  /**
   * 邀请人用户ID
   */
  inviter_user_id: string;
};

export type InviterConfigUpdateInput = {
  /**
   * 最大邀请人数
   */
  max_count: number;
  /**
   * 是否启用
   */
  is_enabled?: boolean;
};

export type AppControllerGetInfoResponse = unknown;

export type AppControllerGetInfoError = unknown;

export type AppControllerGetTablesResponse = unknown;

export type AppControllerGetTablesError = unknown;

export type AppControllerGetTableData = {
  query: {
    name: string;
  };
};

export type AppControllerGetTableResponse = {
  [key: string]: unknown;
};

export type AppControllerGetTableError = unknown;

export type AppControllerGetAboutResponse = AppInfo;

export type AppControllerGetAboutError = unknown;

export type UsersControllerGetListData = {
  query?: {
    /**
     * ERP 用户ID
     */
    erp_user_id?: string;
    gender?: 'Unknown' | 'Male' | 'Female';
    is_enabled?: boolean;
    /**
     * 关键字
     */
    keyword?: string;
    /**
     * 每页显示数量
     */
    maxResultCount?: number;
    /**
     * 角色ID/角色名称/角色code
     */
    role?: string;
    /**
     * skin
     */
    skip?: number;
    /**
     * 排序
     */
    sort?: string;
    userType?: 'Unset' | 'Customer' | 'ShopManager';
  };
};

export type UsersControllerGetListResponse = UserPagedResult;

export type UsersControllerGetListError = unknown;

export type UsersControllerCreateData = {
  body: UserCreateInput;
};

export type UsersControllerCreateResponse = UserDetailDto;

export type UsersControllerCreateError = unknown;

export type UsersControllerDeleteManyData = {
  query: {
    id: Array<string>;
  };
};

export type UsersControllerDeleteManyResponse = unknown;

export type UsersControllerDeleteManyError = unknown;

export type UsersControllerGetItemData = {
  path: {
    id: string;
  };
};

export type UsersControllerGetItemResponse = UserDetailDto;

export type UsersControllerGetItemError = unknown;

export type UsersControllerUpdateData = {
  body: UserUpdateInput;
  path: {
    id: string;
  };
};

export type UsersControllerUpdateResponse = UserDetailDto;

export type UsersControllerUpdateError = unknown;

export type UsersControllerSetIsEnabledData = {
  path: {
    id: string;
  };
  query: {
    is_enabled: boolean;
  };
};

export type UsersControllerSetIsEnabledResponse = unknown;

export type UsersControllerSetIsEnabledError = unknown;

export type UsersControllerGetExcelTemplateResponse = unknown;

export type UsersControllerGetExcelTemplateError = unknown;

export type UsersControllerExportExcelResponse = unknown;

export type UsersControllerExportExcelError = unknown;

export type UsersControllerImportExcelData = {
  /**
   * Excel
   */
  body: ExcelUploadInput;
};

export type UsersControllerImportExcelResponse = unknown;

export type UsersControllerImportExcelError = unknown;

export type ActivitiesControllerGetListData = {
  query?: {
    /**
     * 结束时间
     */
    end_time?: string;
    /**
     * ERP用户ID
     */
    erp_user_id?: string;
    is_enabled?: boolean;
    /**
     * 关键字
     */
    keyword?: string;
    /**
     * 每页显示数量
     */
    maxResultCount?: number;
    /**
     * skin
     */
    skip?: number;
    /**
     * 排序
     */
    sort?: string;
    /**
     * 起始时间
     */
    start_time?: string;
    /**
     * 用户ID
     */
    user_id?: string;
  };
};

export type ActivitiesControllerGetListResponse = ActivityPagedResult;

export type ActivitiesControllerGetListError = unknown;

export type ActivitiesControllerCreateData = {
  body: ActivityCreateInput;
};

export type ActivitiesControllerCreateResponse = ActivityDetailDto;

export type ActivitiesControllerCreateError = unknown;

export type ActivitiesControllerDeleteManyData = {
  query: {
    id: Array<string>;
  };
};

export type ActivitiesControllerDeleteManyResponse = unknown;

export type ActivitiesControllerDeleteManyError = unknown;

export type ActivitiesControllerGetListByCurrentUserResponse = ActivityPagedResult;

export type ActivitiesControllerGetListByCurrentUserError = unknown;

export type ActivitiesControllerGetItemData = {
  path: {
    id: string;
  };
};

export type ActivitiesControllerGetItemResponse = ActivityDetailDto;

export type ActivitiesControllerGetItemError = unknown;

export type ActivitiesControllerUpdateData = {
  body: ActivityUpdateInput;
  path: {
    id: string;
  };
};

export type ActivitiesControllerUpdateResponse = ActivityDetailDto;

export type ActivitiesControllerUpdateError = unknown;

export type ActivitiesControllerSetIsEnabledData = {
  path: {
    id: string;
  };
  query: {
    is_enabled: boolean;
  };
};

export type ActivitiesControllerSetIsEnabledResponse = unknown;

export type ActivitiesControllerSetIsEnabledError = unknown;

export type ActivitiesControllerGetExcelTemplateResponse = unknown;

export type ActivitiesControllerGetExcelTemplateError = unknown;

export type ActivitiesControllerExportExcelResponse = unknown;

export type ActivitiesControllerExportExcelError = unknown;

export type ActivitiesControllerImportExcelData = {
  /**
   * Excel
   */
  body: ExcelUploadInput;
};

export type ActivitiesControllerImportExcelResponse = unknown;

export type ActivitiesControllerImportExcelError = unknown;

export type ActivityCustomerControllerGetListData = {
  query?: {
    /**
     * 活动Id
     */
    activity_id?: string;
    /**
     * 邀请人用户ErpUserId
     */
    inviter_erp_user_id?: string;
    /**
     * 邀请人用户Id
     */
    inviter_user_id?: string;
    is_checked?: boolean;
    /**
     * 是否可用
     */
    is_enabled?: boolean;
    is_invited?: boolean;
    /**
     * 关键字
     */
    keyword?: string;
    /**
     * 每页显示数量
     */
    maxResultCount?: number;
    /**
     * skin
     */
    skip?: number;
    /**
     * 排序
     */
    sort?: string;
  };
};

export type ActivityCustomerControllerGetListResponse = ActivityCustomerPagedResult;

export type ActivityCustomerControllerGetListError = unknown;

export type ActivityCustomerControllerCreateData = {
  body: ActivityCustomerCreateInput;
};

export type ActivityCustomerControllerCreateResponse = ActivityCustomerDetailDto;

export type ActivityCustomerControllerCreateError = unknown;

export type ActivityCustomerControllerDeleteManyData = {
  query: {
    id: Array<string>;
  };
};

export type ActivityCustomerControllerDeleteManyResponse = unknown;

export type ActivityCustomerControllerDeleteManyError = unknown;

export type ActivityCustomerControllerGetItemData = {
  path: {
    id: string;
  };
};

export type ActivityCustomerControllerGetItemResponse = ActivityCustomerDetailDto;

export type ActivityCustomerControllerGetItemError = unknown;

export type ActivityCustomerControllerUpdateData = {
  body: ActivityCustomerUpdateInput;
  path: {
    id: string;
  };
};

export type ActivityCustomerControllerUpdateResponse = ActivityCustomerDetailDto;

export type ActivityCustomerControllerUpdateError = unknown;

export type ActivityCustomerControllerSetIsCheckedData = {
  path: {
    id: string;
  };
  query: {
    is_checked: boolean;
  };
};

export type ActivityCustomerControllerSetIsCheckedResponse = {
  [key: string]: unknown;
};

export type ActivityCustomerControllerSetIsCheckedError = unknown;

export type ActivityCustomerControllerSetIsActivedData = {
  path: {
    id: string;
  };
  query: {
    is_invited: boolean;
  };
};

export type ActivityCustomerControllerSetIsActivedResponse = {
  [key: string]: unknown;
};

export type ActivityCustomerControllerSetIsActivedError = unknown;

export type ActivityCustomerControllerExportExcelData = {
  query?: {
    /**
     * 活动Id
     */
    activity_id?: string;
    /**
     * 邀请人用户ErpUserId
     */
    inviter_erp_user_id?: string;
    /**
     * 邀请人用户Id
     */
    inviter_user_id?: string;
    is_checked?: boolean;
    /**
     * 是否可用
     */
    is_enabled?: boolean;
    is_invited?: boolean;
    /**
     * 关键字
     */
    keyword?: string;
    /**
     * 每页显示数量
     */
    maxResultCount?: number;
    /**
     * skin
     */
    skip?: number;
    /**
     * 排序
     */
    sort?: string;
  };
};

export type ActivityCustomerControllerExportExcelResponse = unknown;

export type ActivityCustomerControllerExportExcelError = unknown;

export type ActivityCustomerControllerSetIsEnabledData = {
  path: {
    id: string;
  };
  query: {
    is_enabled: boolean;
  };
};

export type ActivityCustomerControllerSetIsEnabledResponse = unknown;

export type ActivityCustomerControllerSetIsEnabledError = unknown;

export type ActivityCustomerControllerGetExcelTemplateResponse = unknown;

export type ActivityCustomerControllerGetExcelTemplateError = unknown;

export type ActivityCustomerControllerImportExcelData = {
  /**
   * Excel
   */
  body: ExcelUploadInput;
};

export type ActivityCustomerControllerImportExcelResponse = unknown;

export type ActivityCustomerControllerImportExcelError = unknown;

export type ActivityCustomerInvitersControllerGetListData = {
  query?: {
    /**
     * 活动Id
     */
    activity_id?: string;
    /**
     * 邀请人用户ErpUserId
     */
    inviter_erp_user_id?: string;
    /**
     * 邀请人用户Id
     */
    inviter_user_id?: string;
    is_checked?: boolean;
    /**
     * 是否可用
     */
    is_enabled?: boolean;
    is_invited?: boolean;
    /**
     * 关键字
     */
    keyword?: string;
    /**
     * 每页显示数量
     */
    maxResultCount?: number;
    /**
     * skin
     */
    skip?: number;
    /**
     * 排序
     */
    sort?: string;
  };
};

export type ActivityCustomerInvitersControllerGetListResponse = Array<ActivityCustomerInvitersDto>;

export type ActivityCustomerInvitersControllerGetListError = unknown;

export type ActivityCustomerInvitersControllerCreateData = {
  body: ActivityCustomerInvitersCreateInput;
};

export type ActivityCustomerInvitersControllerCreateResponse = ActivityCustomerInvitersDetailDto;

export type ActivityCustomerInvitersControllerCreateError = unknown;

export type ActivityCustomerInvitersControllerDeleteManyData = {
  query: {
    id: Array<string>;
  };
};

export type ActivityCustomerInvitersControllerDeleteManyResponse = unknown;

export type ActivityCustomerInvitersControllerDeleteManyError = unknown;

export type ActivityCustomerInvitersControllerGetItemData = {
  path: {
    id: string;
  };
};

export type ActivityCustomerInvitersControllerGetItemResponse = ActivityCustomerInvitersDetailDto;

export type ActivityCustomerInvitersControllerGetItemError = unknown;

export type ActivityCustomerInvitersControllerUpdateData = {
  body: ActivityCustomerInvitersUpdateInput;
  path: {
    id: string;
  };
};

export type ActivityCustomerInvitersControllerUpdateResponse = ActivityCustomerInvitersDetailDto;

export type ActivityCustomerInvitersControllerUpdateError = unknown;

export type ActivityCustomerInvitersControllerSetIsEnabledData = {
  path: {
    id: string;
  };
  query: {
    is_enabled: boolean;
  };
};

export type ActivityCustomerInvitersControllerSetIsEnabledResponse = unknown;

export type ActivityCustomerInvitersControllerSetIsEnabledError = unknown;

export type ActivityCustomerInvitersControllerGetExcelTemplateResponse = unknown;

export type ActivityCustomerInvitersControllerGetExcelTemplateError = unknown;

export type ActivityCustomerInvitersControllerExportExcelResponse = unknown;

export type ActivityCustomerInvitersControllerExportExcelError = unknown;

export type ActivityCustomerInvitersControllerImportExcelData = {
  /**
   * Excel
   */
  body: ExcelUploadInput;
};

export type ActivityCustomerInvitersControllerImportExcelResponse = unknown;

export type ActivityCustomerInvitersControllerImportExcelError = unknown;

export type AuthControllerSignInData = {
  body: AuthInput;
};

export type AuthControllerSignInResponse = TokenResult;

export type AuthControllerSignInError = unknown;

export type AuthControllerGetProfileResponse = {
  [key: string]: unknown;
};

export type AuthControllerGetProfileError = unknown;

export type AuthControllerRefreshTokenResponse = unknown;

export type AuthControllerRefreshTokenError = unknown;

export type SeedControllerSeedResponse = unknown;

export type SeedControllerSeedError = unknown;

export type RolesControllerGetListData = {
  query?: {
    /**
     * 是否默认
     */
    is_default?: boolean;
    /**
     * 是否可用
     */
    is_enabled?: boolean;
    /**
     * 是否公开
     */
    is_public?: boolean;
    /**
     * 是否固定
     */
    is_static?: boolean;
    /**
     * 关键字
     */
    keyword?: string;
    /**
     * 每页显示数量
     */
    maxResultCount?: number;
    /**
     * 权限编码
     */
    permission_code?:
      | 'Users_Create'
      | 'Users_Update'
      | 'Users_GetItem'
      | 'Users_GetList'
      | 'Users_Delete'
      | 'Users_Excel_Tpl'
      | 'Users_Excel_Import'
      | 'Users_Excel_Ouput'
      | 'Users_Set_IsEnabled'
      | 'Roles_Create'
      | 'Roles_Update'
      | 'Roles_GetItem'
      | 'Roles_GetList'
      | 'Roles_Delete'
      | 'Roles_Excel_Tpl'
      | 'Roles_Excel_Import'
      | 'Roles_Excel_Ouput'
      | 'Roles_Set_IsEnabled'
      | 'Roles_Set_Permissions'
      | 'AuditLog_Create'
      | 'AuditLog_Update'
      | 'AuditLog_GetItem'
      | 'AuditLog_GetList'
      | 'AuditLog_Delete'
      | 'AuditLog_Excel_Tpl'
      | 'AuditLog_Excel_Import'
      | 'AuditLog_Excel_Ouput'
      | 'AuditLog_Set_Permissions'
      | 'Activity_Create'
      | 'Activity_Update'
      | 'Activity_GetItem'
      | 'Activity_GetList'
      | 'Activity_Delete'
      | 'Activity_Excel_Tpl'
      | 'Activity_Excel_Import'
      | 'Activity_Excel_Ouput'
      | 'Activity_Set_IsEnabled'
      | 'Activity_GetList_ByCurrentUser'
      | 'ActivityCustomer_Create'
      | 'ActivityCustomer_Update'
      | 'ActivityCustomer_GetItem'
      | 'ActivityCustomer_GetList'
      | 'ActivityCustomer_Delete'
      | 'ActivityCustomer_Excel_Tpl'
      | 'ActivityCustomer_Excel_Import'
      | 'ActivityCustomer_Excel_Ouput'
      | 'ActivityCustomer_Set_IsChecked'
      | 'ActivityCustomer_Set_IsInvited'
      | 'ActivityCustomer_Set_IsGifed'
      | 'ActivityCustomer_Set_IsEnabled'
      | 'ErpUsers_GetItem'
      | 'ErpUsers_GetList'
      | 'InviterConfig_Create'
      | 'InviterConfig_Update'
      | 'InviterConfig_GetItem'
      | 'InviterConfig_GetList'
      | 'InviterConfig_Delete'
      | 'InviterConfig_Excel_Tpl'
      | 'InviterConfig_Excel_Import'
      | 'InviterConfig_Excel_Ouput'
      | 'InviterConfig_Set_IsEnabled'
      | 'InviterConfig_GetItem_ByCurrentUser'
      | 'ActivityCustomerInviters_Create'
      | 'ActivityCustomerInviters_Update'
      | 'ActivityCustomerInviters_GetItem'
      | 'ActivityCustomerInviters_GetList'
      | 'ActivityCustomerInviters_Delete'
      | 'ActivityCustomerInviters_Excel_Tpl'
      | 'ActivityCustomerInviters_Excel_Import'
      | 'ActivityCustomerInviters_Excel_Ouput'
      | 'ActivityCustomerInviters_Set_IsEnabled';
    /**
     * skin
     */
    skip?: number;
    /**
     * 排序
     */
    sort?: string;
    /**
     * 用户ID
     */
    user_id?: string;
  };
};

export type RolesControllerGetListResponse = RolePagedResult;

export type RolesControllerGetListError = unknown;

export type RolesControllerCreateData = {
  body: RoleCreateInput;
};

export type RolesControllerCreateResponse = RoleDetailDto;

export type RolesControllerCreateError = unknown;

export type RolesControllerDeleteManyData = {
  query: {
    id: Array<string>;
  };
};

export type RolesControllerDeleteManyResponse = unknown;

export type RolesControllerDeleteManyError = unknown;

export type RolesControllerGetItemData = {
  path: {
    id: string;
  };
};

export type RolesControllerGetItemResponse = RoleDetailDto;

export type RolesControllerGetItemError = unknown;

export type RolesControllerUpdateData = {
  body: RoleUpdateInput;
  path: {
    id: string;
  };
};

export type RolesControllerUpdateResponse = RoleDetailDto;

export type RolesControllerUpdateError = unknown;

export type RolesControllerSetPermissionsData = {
  body: SetPermissionsInput;
  path: {
    id: string;
  };
};

export type RolesControllerSetPermissionsResponse = unknown;

export type RolesControllerSetPermissionsError = unknown;

export type RolesControllerSetIsEnabledData = {
  path: {
    id: string;
  };
  query: {
    is_enabled: boolean;
  };
};

export type RolesControllerSetIsEnabledResponse = unknown;

export type RolesControllerSetIsEnabledError = unknown;

export type RolesControllerGetExcelTemplateResponse = unknown;

export type RolesControllerGetExcelTemplateError = unknown;

export type RolesControllerExportExcelResponse = unknown;

export type RolesControllerExportExcelError = unknown;

export type RolesControllerImportExcelData = {
  /**
   * Excel
   */
  body: ExcelUploadInput;
};

export type RolesControllerImportExcelResponse = unknown;

export type RolesControllerImportExcelError = unknown;

export type AuditsControllerGetListData = {
  query?: {
    /**
     * class_name
     */
    class_name?: string;
    /**
     * client_id
     */
    client_id?: string;
    /**
     * http_status
     */
    end_http_status?: number;
    /**
     * handler_name
     */
    handler_name?: string;
    /**
     * http_method
     */
    http_method?: string;
    /**
     * http_status
     */
    http_status?: number;
    /**
     * IP
     */
    ip?: string;
    /**
     * 关键字
     */
    keyword?: string;
    /**
     * 每页显示数量
     */
    maxResultCount?: number;
    /**
     * skin
     */
    skip?: number;
    /**
     * 排序
     */
    sort?: string;
    /**
     * http_status
     */
    start_http_status?: number;
    /**
     * user_id
     */
    user_id?: string;
  };
};

export type AuditsControllerGetListResponse = AuditLogPagedResult;

export type AuditsControllerGetListError = unknown;

export type AuditsControllerDeleteManyData = {
  query: {
    id: Array<string>;
  };
};

export type AuditsControllerDeleteManyResponse = unknown;

export type AuditsControllerDeleteManyError = unknown;

export type AuditsControllerGetItemData = {
  path: {
    id: string;
  };
};

export type AuditsControllerGetItemResponse = AuditLogDetailDto;

export type AuditsControllerGetItemError = unknown;

export type AuditsControllerSetIsEnabledData = {
  path: {
    id: string;
  };
  query: {
    is_enabled: boolean;
  };
};

export type AuditsControllerSetIsEnabledResponse = unknown;

export type AuditsControllerSetIsEnabledError = unknown;

export type AuditsControllerGetExcelTemplateResponse = unknown;

export type AuditsControllerGetExcelTemplateError = unknown;

export type AuditsControllerExportExcelResponse = unknown;

export type AuditsControllerExportExcelError = unknown;

export type AuditsControllerImportExcelData = {
  /**
   * Excel
   */
  body: ExcelUploadInput;
};

export type AuditsControllerImportExcelResponse = unknown;

export type AuditsControllerImportExcelError = unknown;

export type ErpUsersControllerFindAllData = {
  query?: {
    /**
     * http_status
     */
    http_status?: number;
    /**
     * 关键字
     */
    keyword?: string;
    /**
     * 每页显示数量
     */
    maxResultCount?: number;
    /**
     * skin
     */
    skip?: number;
    /**
     * 排序
     */
    sort?: string;
  };
};

export type ErpUsersControllerFindAllResponse = ErpUsersPagedResult;

export type ErpUsersControllerFindAllError = unknown;

export type ErpUsersControllerFindOneData = {
  path: {
    id: string;
  };
};

export type ErpUsersControllerFindOneResponse = ErpUsersDto;

export type ErpUsersControllerFindOneError = unknown;

export type InviterConfigControllerGetListData = {
  query?: {
    /**
     * 活动ID
     */
    activity_id?: string;
    /**
     * 邀请人ERP User ID
     */
    inviter_erp_user_id?: string;
    /**
     * 邀请人用户ID
     */
    inviter_user_id?: string;
    /**
     * 关键字
     */
    keyword?: string;
    /**
     * 每页显示数量
     */
    maxResultCount?: number;
    /**
     * skin
     */
    skip?: number;
    /**
     * 排序
     */
    sort?: string;
  };
};

export type InviterConfigControllerGetListResponse = InviterConfigPagedResult;

export type InviterConfigControllerGetListError = unknown;

export type InviterConfigControllerCreateData = {
  body: InviterConfigCreateInput;
};

export type InviterConfigControllerCreateResponse = InviterConfigDetailDto;

export type InviterConfigControllerCreateError = unknown;

export type InviterConfigControllerDeleteManyData = {
  query: {
    id: Array<string>;
  };
};

export type InviterConfigControllerDeleteManyResponse = unknown;

export type InviterConfigControllerDeleteManyError = unknown;

export type InviterConfigControllerGetItemData = {
  path: {
    id: string;
  };
};

export type InviterConfigControllerGetItemResponse = InviterConfigDetailDto;

export type InviterConfigControllerGetItemError = unknown;

export type InviterConfigControllerUpdateData = {
  body: InviterConfigUpdateInput;
  path: {
    id: string;
  };
};

export type InviterConfigControllerUpdateResponse = InviterConfigDetailDto;

export type InviterConfigControllerUpdateError = unknown;

export type InviterConfigControllerGetItemByCurrentUserResponse = InviterConfigDetailDto;

export type InviterConfigControllerGetItemByCurrentUserError = unknown;

export type InviterConfigControllerSetIsEnabledData = {
  path: {
    id: string;
  };
  query: {
    is_enabled: boolean;
  };
};

export type InviterConfigControllerSetIsEnabledResponse = unknown;

export type InviterConfigControllerSetIsEnabledError = unknown;

export type InviterConfigControllerGetExcelTemplateResponse = unknown;

export type InviterConfigControllerGetExcelTemplateError = unknown;

export type InviterConfigControllerExportExcelResponse = unknown;

export type InviterConfigControllerExportExcelError = unknown;

export type InviterConfigControllerImportExcelData = {
  /**
   * Excel
   */
  body: ExcelUploadInput;
};

export type InviterConfigControllerImportExcelResponse = unknown;

export type InviterConfigControllerImportExcelError = unknown;
