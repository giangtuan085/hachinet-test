export interface ApiResponseModel<T> {
    code: ResponseCode;
    data: T;
    message?: string;
    status?: string;
}

export enum ResponseCode {
    SUCCESS = '200',
}