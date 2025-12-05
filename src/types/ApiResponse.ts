export type TApiResponse<T> = {
  code: number;
  error: boolean;
  message: string;
  data?: T;
};
