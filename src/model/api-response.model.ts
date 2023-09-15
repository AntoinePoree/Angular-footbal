export interface IApiResponse<T, Y> {
  errors: Array<string> | { requests: string };
  get: string;
  paging: {
    current: number;
    total: number;
  };
  parameters: Y;
  response: Array<T>;
  results: 1;
}
