export type PagedResultDto<T> = {
  total: number;
  items: T[];
};
